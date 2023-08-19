import fs from 'fs';
import { Riff } from '../riff';
import { StringTable } from '../bytecode/strings';

export class Script {
  public code!: DataView;
  public strings?: StringTable;
  public operand_size!: number;
  public executing: boolean = false;

  public async load(file: string) {
    const buffer = await fs.promises.readFile(file);
    const riff = Riff.from(buffer);

    if (riff.type != 'SCR ') {
      throw new Error('Invalid script type');
    }

    console.log("\nSections:")
    console.log("===============================")
    for (const block of riff.blocks) {
      console.log('.section ' + block.name + ' ; Size: ' + block.size);
    }
    console.log("")

    const code = riff.getBlock('CODE');
    if (!code) {
      throw new Error('CODE block not found');
    }

    this.code = code.data;

    const options = riff.getBlock('OPT ');
    if (options) {
      this.operand_size = options.data.getUint32(0, false);
    }

    const strings = riff.getBlock('STR ');
    if (strings) {
      this.strings = new StringTable();
      this.strings.load(strings.data);
    }

    this.executing = true;
    return this;
  }
}
