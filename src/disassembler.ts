import * as fs from 'fs/promises';
import * as path from 'path';
import * as fs2 from 'fs';

import { Riff } from './core/riff';

export class Script {
  public async load(file: string) {
    const fileNameWithoutExt = path.basename(file, '.bin');
    const dirbase = path.resolve(__dirname, '..');
    const buffer = await fs.readFile(path.join(dirbase, file));

    const stream = new DataView(buffer.buffer);

    // Load the script as a RIFF file
    const riff = new Riff();
    riff.load(stream);

    if (riff.type != 'SCR ') {
      throw new Error('Invalid script type');
    }

    for (const block of riff.blocks) {
      console.log('.section ' + block.name + ' ; Size: ' + block.size);
    }

    let strings = new Map<number, { text: string; length: number; start: number; end: number }>();

    const stringsBlock = riff.getBlock('STR ');
    if (stringsBlock) {
      strings = this.loadStringTable(stringsBlock);
    }

    const code = riff.getBlock('CODE');
    if (!code) {
      throw new Error('CODE block not found');
    }

    let codeStream = code.data;
    let instruction_ptr = 4;

    // write the code to a asm file with the instructions and labels
    const asm = fs2.createWriteStream('tests/' + fileNameWithoutExt + '.asm');

    if (stringsBlock) {
      // write a section for the block "STR "
      asm.write('; Size: ' + stringsBlock.size + '\n');
      asm.write('.section STR\n');

      for (const [index, string] of strings.entries()) {
        asm.write(`    string_${index} db "${string.text}", 0\n`);
      }

      asm.write('\n');
    }

    // write a section for the code
    asm.write('; Size: ' + code.size + '\n');
    asm.write('.section CODE\n\n');
    asm.write('.global main\n');

    const instructions = [];
    const labels = new Map<number, string>();
    let index = 1;

    while (instruction_ptr < code.size) {
      const opcode = codeStream.getUint8(instruction_ptr);
      const operands = codeStream.getUint32(instruction_ptr + 4, false);

      const instr = new Instruction(opcode, operands, index);
      // console.log(
      //   `0x${instruction_ptr.toString(16).toUpperCase()}: ${
      //     Opcode[instr.opcode]
      //   }`,
      //   instr.operand
      // );

      if (
        instr.opcode === Opcode.OP_JUMP ||
        instr.opcode === Opcode.OP_PUSH_NEXT_JUMP_TO_OPERAND ||
        instr.opcode === Opcode.OP_JUMP_TO_STACK_VALUE ||
        instr.opcode === Opcode.OP_JUMP_GREATER_EQUAL_ZERO ||
        instr.opcode === Opcode.OP_JUMP_GREATER_ZERO ||
        instr.opcode === Opcode.OP_JUMP_IF_NON_ZERO ||
        instr.opcode === Opcode.OP_JUMP_IF_ZERO ||
        instr.opcode === Opcode.OP_JUMP_LESS_EQUAL_ZERO ||
        instr.opcode === Opcode.OP_END ||
        instr.opcode === Opcode.OP_JUMP_LESS_ZERO
      ) {
        labels.set(instr.operand, `label_${instr.operand}`);
      }

      instructions.push(instr);

      instruction_ptr += 8;
      index++;
    }

    let ident = 4;
    for (const instr of instructions) {
      if (labels.has(instr.position)) {
        asm.write('\n');
        asm.write(`    ${labels.get(instr.position)}:\n`);
        ident = 8;
      }

      asm.write(''.padEnd(ident));
      switch (instr.opcode) {
        case Opcode.OP_NOP:
          asm.write('nop\n');
          break;
        case Opcode.OP_STACK_SWAP_STORE:
          asm.write('swap\n');
          break;
        case Opcode.OP_STACK_ADD_OFFSET:
          asm.write('stack_add\n');
          break;
        case Opcode.OP_STACK_SUB:
          asm.write('stack_sub\n');
          break;
        case Opcode.OP_STACK_MULTI_RSHIFT:
          throw new Error("Opcode 'multi_rshift' not implemented");
        case Opcode.OP_STACK_LSHIFT_DIVIDE:
          throw new Error("Opcode 'lshift_divide' not implemented");
        case Opcode.OP_STACK_MODULUS:
          asm.write('mod\n');
          break;
        case Opcode.OP_STACK_ADD:
          asm.write('add\n');
          break;
        case Opcode.OP_STACK_SUBTRACT:
          asm.write('sub\n');
          break;
        case Opcode.OP_STACK_MULTIPLY_SHIFT:
          asm.write('mul\n');
          break;
        case Opcode.OP_STACK_DIVIDE_SHIFT:
          asm.write('div\n');
          break;
        case Opcode.OP_UNK_MOD_0xB:
          throw new Error("Opcode 'unk_mod_0xB' not implemented");
        case Opcode.OP_STACK_AND:
          asm.write('and\n');
          break;
        case Opcode.OP_STACK_OR:
          asm.write('or\n');
          break;
        case Opcode.OP_STACK_INCREMENT_SHIFT:
          asm.write('inc_shift\n');
          break;
        //throw new Error("Opcode 'increment_shift' not implemented");
        case Opcode.OP_STACK_DECREMENT_SHIFT:
          asm.write('dec_shift\n');
          break;
        // throw new Error("Opcode 'decrement_shift' not implemented");
        case Opcode.OP_STACK_NEGATE:
          asm.write('neg\n');
          break;
        case Opcode.OP_STACK_NOT:
          asm.write('not\n');
          break;
        case Opcode.OP_STACK_COMPARE:
          asm.write('cmp\n');
          break;
        case Opcode.OP_PUSH_FROM_REGISTER:
          asm.write(`push_reg ${instr.operand}\n`);
          break;
        case Opcode.OP_POP_TO_REGISTER:
          asm.write('pop_reg\n');
          break;
        case Opcode.OP_STACK_DUPLICATE:
          asm.write('dup\n');
          break;
        case Opcode.OP_STACK_POP:
          asm.write('pop\n');
          break;
        case Opcode.OP_PUSH:
          asm.write(`push ${instr.operand}\n`);
          break;
        case Opcode.OP_JUMP:
          asm.write(`jmp label_${instr.operand} ; goto label_${instr.operand}\n`);
          break;
        case Opcode.OP_JUMP_LESS_ZERO:
          asm.write(`jl label_${instr.operand} ; if < 0 goto label_${instr.operand}\n`);
          break;
        case Opcode.OP_JUMP_LESS_EQUAL_ZERO:
          asm.write(`jle label_${instr.operand} ; if <= 0 goto label_${instr.operand}\n`);
          break;
        case Opcode.OP_JUMP_IF_ZERO:
          asm.write(`jz label_${instr.operand} ; if == 0 goto label_${instr.operand}\n`);
          break;
        case Opcode.OP_JUMP_IF_NON_ZERO:
          asm.write(`jnz label_${instr.operand} ; if != 0 goto label_${instr.operand}\n`);
          break;
        case Opcode.OP_JUMP_GREATER_EQUAL_ZERO:
          asm.write(`jge label_${instr.operand} ; if >= 0 goto label_${instr.operand}\n`);
          break;
        case Opcode.OP_JUMP_GREATER_ZERO:
          asm.write(`jg label_${instr.operand} ; if > 0 goto label_${instr.operand}\n`);
          break;
        case Opcode.OP_PUSH_NEXT_JUMP_TO_OPERAND:
          throw new Error("Opcode 'push_next_jump_to_operand' not implemented");
        case Opcode.OP_JUMP_TO_STACK_VALUE:
          throw new Error("Opcode 'jump_to_stack_value' not implemented");
        case Opcode.OP_REG_SET_OPERAND:
          throw new Error("Opcode 'reg_set_operand' not implemented");
        case Opcode.OP_REG_INCREMENT_OPERAND_MAX_200:
          throw new Error("Opcode 'reg_increment_operand_max_200' not implemented");
        case Opcode.OP_REG_DECREMENT_OPERAND:
          throw new Error("Opcode 'reg_decrement_operand' not implemented");
        case Opcode.OP_END:
          asm.write('ret\n');
          break;
        case Opcode.OP_CALL:
          asm.write(`call dispatch(${instr.operand})\n`);
          break;
        default:
          throw new Error('Unknown opcode: ' + instr.opcode);
      }
    }

    // write a section for the block "OPT "
    const optBlock = riff.getBlock('OPT ');
    if (!optBlock) {
      throw new Error('OPT block not found');
    }

    asm.write('\n');
    asm.write('; Size: ' + optBlock.size + '\n');
    asm.write('.section OPT\n\n');
    asm.write('operand_size dw ' + optBlock.data.getUint32(0, false) + '\n');
    asm.end();
  }
}

async function main() {
  const script = new Script();

  // load all files in the tests folder
  for await (const file of await fs.readdir('tests')) {
    if (file.endsWith('.bin')) {
      console.log('Loading ' + file);
      console.log('========================================');
      await script.load('tests/' + file);
      console.log('========================================');
    }
  }

  console.log(script);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
