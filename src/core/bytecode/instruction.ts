import { Opcode } from './opcode';

export class Instruction {
  constructor(public opcode: Opcode, public operand: number, public position: number) {}
}
