export enum Opcode {
  OP_NOP = 0x0,
  OP_POP_SWAP_STORE = 0x1,
  OP_STACK_ADD_OFFSET = 0x2,
  OP_STACK_SUB_OFFSET = 0x3,
  OP_STACK_MULTI_RSHIFT = 0x4,
  OP_STACK_LSHIFT_DIVIDE = 0x5,
  OP_STACK_MODULUS = 0x6,
  OP_STACK_ADD = 0x7,
  OP_STACK_SUB = 0x8,
  OP_STACK_MUL = 0x9,
  OP_STACK_DIV = 0xa,
  OP_UNK_MOD_0xB = 0xb,
  OP_STACK_AND = 0xc,
  OP_STACK_OR = 0xd,
  OP_STACK_INCREMENT_SHIFT = 0xe,
  OP_STACK_DECREMENT_SHIFT = 0xf,
  OP_STACK_NEGATE = 0x10,
  OP_STACK_NOT = 0x11,
  OP_STACK_COMPARE = 0x12,
  OP_PUSH_FROM_REGISTER = 0x13,
  OP_POP_TO_REGISTER = 0x14,
  OP_STACK_DUPLICATE = 0x15,
  OP_STACK_POP = 0x16,
  OP_PUSH = 0x17,
  OP_JUMP = 0x18,
  OP_JUMP_LESS_ZERO = 0x19,
  OP_JUMP_LESS_EQUAL_ZERO = 0x1a,
  OP_JUMP_IF_ZERO = 0x1b,
  OP_JUMP_IF_NON_ZERO = 0x1c,
  OP_JUMP_GREATER_EQUAL_ZERO = 0x1d,
  OP_JUMP_GREATER_ZERO = 0x1e,
  OP_PUSH_NEXT_JUMP_TO_OPERAND = 0x1f,
  OP_JUMP_TO_STACK_VALUE = 0x20,
  OP_REG_SET_OPERAND = 0x21,
  OP_REG_INCREMENT_OPERAND = 0x22,
  OP_REG_DECREMENT_OPERAND = 0x23,
  OP_END = 0x24,
  OP_CALL = 0x25,
}

export enum OpcodeFlags {
  OP_FLAG_NONE = 0x0,
  OP_FLAG_JUMP = 0x1,
  OP_FLAG_CALL = 0x2,
  OP_FLAG_STACK = 0x4,
  OP_FLAG_REG = 0x8,
  OP_HAS_OPERAND = 0x10,
}

export interface OpcodeMetadata {
  name: string;
  flags: OpcodeFlags;
  operand_size: number;
}

export const OpcodeTable: Record<Opcode, OpcodeMetadata> = {
  [Opcode.OP_NOP]: {
    name: 'nop',
    flags: OpcodeFlags.OP_FLAG_NONE,
    operand_size: 0,
  },
  [Opcode.OP_POP_SWAP_STORE]: {
    name: 'swap',
    flags: OpcodeFlags.OP_FLAG_STACK,
    operand_size: 4,
  },
  [Opcode.OP_STACK_ADD_OFFSET]: {
    name: 'stack_add',
    flags: OpcodeFlags.OP_FLAG_STACK,
    operand_size: 4,
  },
  [Opcode.OP_STACK_SUB_OFFSET]: {
    name: 'stack_sub',
    flags: OpcodeFlags.OP_FLAG_STACK,
    operand_size: 4,
  },
  [Opcode.OP_STACK_MULTI_RSHIFT]: {
    // TODO: check this
    name: 'stack_mltrshft',
    flags: OpcodeFlags.OP_FLAG_STACK,
    operand_size: 4,
  },
  [Opcode.OP_STACK_LSHIFT_DIVIDE]: {
    // TODO: check this
    name: 'stack_lshdiv',
    flags: OpcodeFlags.OP_FLAG_STACK,
    operand_size: 4,
  },
  [Opcode.OP_STACK_MODULUS]: {
    // TODO: check this
    name: 'stack_mod',
    flags: OpcodeFlags.OP_FLAG_STACK,
    operand_size: 4,
  },
  [Opcode.OP_STACK_ADD]: {
    // TODO: check this
    name: 'stack_add',
    flags: OpcodeFlags.OP_FLAG_STACK,
    operand_size: 4,
  },
  [Opcode.OP_STACK_SUB]: {
    // TODO: check this
    name: 'stack_sub',
    flags: OpcodeFlags.OP_FLAG_STACK,
    operand_size: 4,
  },
  [Opcode.OP_STACK_MUL]: {
    // TODO: check this
    name: 'stack_mulshft',
    flags: OpcodeFlags.OP_FLAG_STACK,
    operand_size: 4,
  },
  [Opcode.OP_STACK_DIV]: {
    // TODO: check this
    name: 'stack_divshft',
    flags: OpcodeFlags.OP_FLAG_STACK,
    operand_size: 4,
  },
  [Opcode.OP_UNK_MOD_0xB]: {
    // TODO: check this
    name: 'unk_mod_0xb',
    flags: OpcodeFlags.OP_FLAG_STACK,
    operand_size: 4,
  },
  [Opcode.OP_STACK_AND]: {
    name: 'and',
    flags: OpcodeFlags.OP_FLAG_STACK,
    operand_size: 0,
  },
  [Opcode.OP_STACK_OR]: {
    name: 'or',
    flags: OpcodeFlags.OP_FLAG_STACK,
    operand_size: 0,
  },
  [Opcode.OP_STACK_INCREMENT_SHIFT]: {
    // TODO: check this
    name: 'stack_incshft',
    flags: OpcodeFlags.OP_FLAG_STACK,
    operand_size: 4,
  },
  [Opcode.OP_STACK_DECREMENT_SHIFT]: {
    // TODO: check this
    name: 'stack_decshft',
    flags: OpcodeFlags.OP_FLAG_STACK,
    operand_size: 4,
  },
  [Opcode.OP_STACK_NEGATE]: {
    name: 'neg',
    flags: OpcodeFlags.OP_FLAG_STACK,
    operand_size: 0,
  },
  [Opcode.OP_STACK_NOT]: {
    name: 'not',
    flags: OpcodeFlags.OP_FLAG_STACK,
    operand_size: 0,
  },
  [Opcode.OP_STACK_COMPARE]: {
    name: 'cmp',
    flags: OpcodeFlags.OP_FLAG_STACK,
    operand_size: 0,
  },
  [Opcode.OP_PUSH_FROM_REGISTER]: {
    // TODO: check this
    name: 'push_reg',
    flags: OpcodeFlags.OP_FLAG_REG,
    operand_size: 0,
  },
  [Opcode.OP_POP_TO_REGISTER]: {
    // TODO: check this
    name: 'pop_reg',
    flags: OpcodeFlags.OP_FLAG_REG,
    operand_size: 0,
  },
  [Opcode.OP_STACK_DUPLICATE]: {
    name: 'dup',
    flags: OpcodeFlags.OP_FLAG_STACK,
    operand_size: 0,
  },
  [Opcode.OP_STACK_POP]: {
    name: 'pop',
    flags: OpcodeFlags.OP_FLAG_STACK,
    operand_size: 0,
  },
  [Opcode.OP_PUSH]: {
    name: 'push',
    flags: OpcodeFlags.OP_FLAG_STACK,
    operand_size: 4,
  },
  [Opcode.OP_JUMP]: {
    name: 'jmp',
    flags: OpcodeFlags.OP_FLAG_JUMP,
    operand_size: 4,
  },
  [Opcode.OP_JUMP_LESS_ZERO]: {
    name: 'jlz',
    flags: OpcodeFlags.OP_FLAG_JUMP,
    operand_size: 4,
  },
  [Opcode.OP_JUMP_LESS_EQUAL_ZERO]: {
    name: 'jlez',
    flags: OpcodeFlags.OP_FLAG_JUMP,
    operand_size: 4,
  },
  [Opcode.OP_JUMP_IF_ZERO]: {
    name: 'jz',
    flags: OpcodeFlags.OP_FLAG_JUMP,
    operand_size: 4,
  },
  [Opcode.OP_JUMP_IF_NON_ZERO]: {
    name: 'jnz',
    flags: OpcodeFlags.OP_FLAG_JUMP,
    operand_size: 4,
  },
  [Opcode.OP_JUMP_GREATER_EQUAL_ZERO]: {
    name: 'jgez',
    flags: OpcodeFlags.OP_FLAG_JUMP,
    operand_size: 4,
  },
  [Opcode.OP_JUMP_GREATER_ZERO]: {
    name: 'jgz',
    flags: OpcodeFlags.OP_FLAG_JUMP,
    operand_size: 4,
  },
  [Opcode.OP_PUSH_NEXT_JUMP_TO_OPERAND]: {
    // TODO: check this
    name: 'push_jmp_opr',
    flags: OpcodeFlags.OP_FLAG_JUMP,
    operand_size: 4,
  },
  [Opcode.OP_JUMP_TO_STACK_VALUE]: {
    name: 'jmp_stack',
    flags: OpcodeFlags.OP_FLAG_JUMP | OpcodeFlags.OP_FLAG_STACK,
    operand_size: 4,
  },
  [Opcode.OP_REG_SET_OPERAND]: {
    // TODO: check this
    name: 'reg_set_operand',
    flags: OpcodeFlags.OP_FLAG_REG,
    operand_size: 4,
  },
  [Opcode.OP_REG_INCREMENT_OPERAND]: {
    // TODO: check this
    name: 'reg_add',
    flags: OpcodeFlags.OP_FLAG_REG,
    operand_size: 4,
  },
  [Opcode.OP_REG_DECREMENT_OPERAND]: {
    // TODO: check this
    name: 'reg_sub',
    flags: OpcodeFlags.OP_FLAG_REG,
    operand_size: 4,
  },
  [Opcode.OP_END]: {
    name: 'end',
    flags: OpcodeFlags.OP_FLAG_NONE,
    operand_size: 0,
  },
  [Opcode.OP_CALL]: {
    name: 'call',
    flags: OpcodeFlags.OP_FLAG_CALL,
    operand_size: 4,
  },
};
