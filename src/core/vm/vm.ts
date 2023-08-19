import { Opcode, OpcodeTable } from '../bytecode/opcode';
import { ArgType, Syscalls } from '../bytecode/syscall';
import { Script } from './script';
import { Stack } from './stack';

export enum Result {
  OK = 0,
  End = 1,
  InvalidInstruction = 2,
  StackOverflow = 3,
}

function padStart(str: string, length: number, pad: string = ' ') {
  return pad.repeat(Math.max(0, length - str.length)) + str;
}

function padEnd(str: string, length: number, pad: string = ' ') {
  return str + pad.repeat(Math.max(0, length - str.length));
}

function throwNotImplementedError(opcode: Opcode) {
  console.warn(`[  WARN]:                          ; Opcode ${Opcode[opcode]} not implemented`);
  // throw new Error(`Opcode ${Opcode[opcode]} not implemented`);
}

function printInstruction(cursor: number, opcode: number, operand: number, instruction: bigint, numberAsHex: boolean = false) {
  const instruction_bytes = instruction
    .toString(16)
    .replace(/(\w{2})/g, '$1 ')
    .trim();

  const maxOpCodeNameSize = Object.values(OpcodeTable).reduce((max, opcode) => {
    return Math.max(max, opcode.name.length);
  }, 0);

  const encodeNumber = (number: number) => {
    if (numberAsHex) {
      return '0x' + number.toString(16);
    } else {
      return number.toString();
    }
  };

  console.log(
    `[${padStart(encodeNumber(cursor), 6)}]: ${padStart(OpcodeTable[opcode as Opcode].name, maxOpCodeNameSize)} ${padStart(
      encodeNumber(operand),
      8,
    )} ; ${instruction_bytes} (${Opcode[opcode]}, 0x${operand.toString(16).toUpperCase()})`,
  );
}

export class DispatchContext {
  public vm: VM;
  public syscall: number;
  public args: any[];

  constructor(vm: VM, syscall: number, args: any[]) {
    this.vm = vm;
    this.syscall = syscall;
    this.args = args;
    this.decode();
  }

  private decode() {
    let syscall = Syscalls[this.syscall];
    let args = [];

    for (let i = syscall.args.length - 1; i >= 0; i--) {
      let arg = syscall.args[i];

      if (arg == ArgType.TYPE_2) {
        args[i] = this.vm.stack.top() / (1 << this.vm.script?.operand_size!);
        this.vm.stack.pop();
      } else if (arg == ArgType.STRING_3) {
        const str_offset = this.vm.stack.top() >> this.vm.script?.operand_size!;
        if (str_offset > this.vm.script?.strings!.size!) {
          args[i] = 'Error';
        } else {
          args[i] = this.vm.script?.strings!.get(str_offset)?.text;
        }
        this.vm.stack.pop();
      } else {
        args[i] = 0;
      }
    }

    args.push(this.vm.stack.top() >> this.vm.script?.operand_size!); 
    this.args = args;
    console.log(this.args);
  }

  public get stack() {
    return this.vm.stack;
  }
}

export class VM {
  public stack: Stack;
  public registers: number[];
  public register_ptr: number = 0;
  public instruction_ptr: number = 0;
  public dispatchTable: Map<number, (context: DispatchContext) => Promise<Result>> = new Map();
  public script?: Script;

  constructor() {
    this.stack = new Stack(100);
    this.registers = new Array(200).fill(0);

    this.dispatchTable.set(10, async (context) => {
      const arg1 = context.args[0];
      const result = arg1 + 10;
      this.stack.push(result << this.script?.operand_size!);
      return Result.OK;
    });

    this.dispatchTable.set(210, async (context) => {
      return Result.OK;
    });

    this.dispatchTable.set(167, async (context) => {
      return Result.OK;
    });

    this.dispatchTable.set(0, async (context) => {
      return Result.OK;
    });

    this.dispatchTable.set(4, async (context) => {
      context.stack.push(0);
      return Result.OK;
    });

    this.dispatchTable.set(225, async (context) => {
      context.stack.push(0);
      return Result.OK;
    });

    this.dispatchTable.set(102, async (context) => {
      context.stack.push(0);
      return Result.OK;
    });

    const syscall_count = 380;
    for (let i = 0; i < syscall_count; i++) {
      if (!this.dispatchTable.has(i)) {
        this.dispatchTable.set(i, async (context) => {
          console.log(`--------------------------------------`);
          console.log(`[ DEBUG]: Syscall ${i} not implemented`);
          console.log(`--------------------------------------`);
          context.stack.push(1);
          context.stack.print();
          return Result.OK;
        });
      }
    }
  }

  public async load(path: string) {
    this.reset();

    this.script = new Script();
    await this.script.load(path);
  }

  public reset() {
    this.stack.reset();
    this.registers.fill(0);
    this.instruction_ptr = 0;
    this.script = undefined;
  }

  public async executeInstruction(): Promise<Result> {
    const cursor = this.instruction_ptr;
    const code = this.script!.code;

    const instruction = code.getBigInt64(cursor, false);

    let opcode = code.getUint8(cursor);
    let unused = [code.getUint8(cursor + 1), code.getUint8(cursor + 2), code.getUint8(cursor + 3)];
    let operand = code.getUint32(cursor + 4, false);

    printInstruction(cursor, opcode, operand, instruction);

    if ((instruction & BigInt(0x100)) != BigInt(0)) {
      operand = this.register_ptr + operand;
    }

    const next_instruction = this.instruction_ptr + 8;
    this.instruction_ptr = next_instruction;

    switch (opcode) {
      case Opcode.OP_NOP:
        break;
      case Opcode.OP_PUSH:
        this.stack.push(operand);
        this.stack.print();
        break;
      case Opcode.OP_STACK_POP:
        this.stack.pop();
        this.stack.print();
        break;
      case Opcode.OP_STACK_DUPLICATE:
        this.stack.duplicate(); 
        this.stack.print();
        break;
      case Opcode.OP_POP_SWAP_STORE:
        this.stack.print();
        if (this.stack.size < 2) {
          return Result.StackOverflow;
        }

        const first = this.stack.pop(); // value
        const second = this.stack.pop(); // target register

        this.stack.push(first);
        this.registers[second] = first;

        this.stack.print();

        break;
      case Opcode.OP_STACK_ADD_OFFSET:
        throwNotImplementedError(opcode);
        break;
      case Opcode.OP_STACK_SUB:
        throwNotImplementedError(opcode);
        break;
      case Opcode.OP_STACK_MULTI_RSHIFT:
        throwNotImplementedError(opcode);
        break;
      case Opcode.OP_STACK_LSHIFT_DIVIDE:
        throwNotImplementedError(opcode);
        break;
      case Opcode.OP_STACK_MODULUS:
        throwNotImplementedError(opcode);
        break;
      case Opcode.OP_STACK_ADD: {
        const a = this.stack.pop();
        const b = this.stack.pop();
        this.stack.push(a + b);
        break;
      }
      case Opcode.OP_STACK_SUB: {
        const a = this.stack.pop();
        const b = this.stack.pop();
        this.stack.push(a - b);
        break;
      }
      case Opcode.OP_STACK_MUL: {
        const a = this.stack.pop();
        const b = this.stack.pop();
        this.stack.push(a * b);
        break;
      }
      case Opcode.OP_STACK_DIV: {
        const a = this.stack.pop();
        const b = this.stack.pop();
        this.stack.push(a / b);
        break;
      }
      case Opcode.OP_UNK_MOD_0xB: {
        const a = this.stack.pop();
        const b = this.stack.pop();
        this.stack.push(a % b);
        break;
      }
      case Opcode.OP_STACK_AND: {
        const a = this.stack.pop();
        const b = this.stack.pop();
        this.stack.push(a & b);
        break;
      }
      case Opcode.OP_STACK_OR: {
        const a = this.stack.pop();
        const b = this.stack.pop();
        this.stack.push(a | b);
        break;
      }
      case Opcode.OP_STACK_INCREMENT_SHIFT: {
        const value = this.stack.pop();
        this.stack.push(value + 1);
        break;
      }
      case Opcode.OP_STACK_DECREMENT_SHIFT: {
        const value = this.stack.pop();
        this.stack.push(value - 1);
        break;
      }
      case Opcode.OP_STACK_NEGATE:
        this.stack.push(-this.stack.pop()); 
        break;
      case Opcode.OP_STACK_NOT:
        this.stack.push(~this.stack.pop());
        break;
      case Opcode.OP_STACK_COMPARE: 
        this.stack.print();
        this.stack.compare();
        this.stack.print();
        break;
      case Opcode.OP_PUSH_FROM_REGISTER:
        this.stack.push(this.registers[operand]);
        this.stack.print();
        break;
      case Opcode.OP_POP_TO_REGISTER:
        this.registers[operand] = this.stack.pop(); 
        this.stack.print();
        break;
      case Opcode.OP_JUMP: {
        this.instruction_ptr = operand;
        break;
      }
      case Opcode.OP_JUMP_LESS_ZERO: {
        const value = this.stack.top();
        if (value < 0) {
          this.instruction_ptr = operand;
        }
        break;
      }
      case Opcode.OP_JUMP_LESS_EQUAL_ZERO: {
        const value = this.stack.top();
        if (value <= 0) {
          this.instruction_ptr = operand;
        }
        break;
      }
      case Opcode.OP_JUMP_IF_ZERO: {
        const value = this.stack.top();
        if (value == 0) {
          this.instruction_ptr = operand;
        }
        break;
      }
      case Opcode.OP_JUMP_IF_NON_ZERO: {
        const value = this.stack.top();
        if (value != 0) {
          this.instruction_ptr = operand;
        }
        break;
      }
      case Opcode.OP_JUMP_GREATER_EQUAL_ZERO: {
        const value = this.stack.top();
        if (value >= 0) {
          this.instruction_ptr = operand;
        }
        break;
      }
      case Opcode.OP_JUMP_GREATER_ZERO: {
        const value = this.stack.top();
        if (value > 0) {
          this.instruction_ptr = operand;
        }
        break;
      }
      case Opcode.OP_PUSH_NEXT_JUMP_TO_OPERAND:
        this.stack.push(next_instruction);
        this.instruction_ptr = operand;
        break;
      case Opcode.OP_JUMP_TO_STACK_VALUE:
        this.instruction_ptr = this.stack.pop();
        break;
      case Opcode.OP_REG_SET_OPERAND:
        this.register_ptr = operand;
        break;
      case Opcode.OP_REG_INCREMENT_OPERAND:
        this.register_ptr += operand;
        break;
      case Opcode.OP_REG_DECREMENT_OPERAND:
        this.register_ptr -= operand;
        break;
      case Opcode.OP_CALL:
        const handler = this.dispatchTable.get(operand);
        if (handler) {
          const context = new DispatchContext(this, operand, []);
          return await handler(context);
        }
        return Result.InvalidInstruction;
      case Opcode.OP_END:
        this.script!.executing = false;
        return Result.End;
      default:
        return Result.InvalidInstruction;
    }

    return Result.OK;
  }

  public async run() {
    if (!this.script?.executing) {
      throw new Error('Script not loaded');
    }

    let executed_instructions = 0;
    let instruction_count = this.script.code.getUint32(0, false);

    console.debug('[DEBUG] Executing script with ' + instruction_count + ' instructions');
    this.instruction_ptr = 4;

    console.debug('');
    while (true) {
      const errorCode = await this.executeInstruction();

      if (errorCode != Result.OK) {
        this.script.executing = false;
        return errorCode;
      } else {
        executed_instructions++;

        if (executed_instructions > 100) {
          break;
        }
      }
    }
  }
}
