import { Instruction } from './instruction';

export class BasicBlock {
  constructor(public name: string, public instructions: Instruction[]) {}
}
