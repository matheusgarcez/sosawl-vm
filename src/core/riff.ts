export class RiffBlock {
  public name: string = '';
  public size: number = 0;
  public data: DataView = new DataView(new ArrayBuffer(0));
}

/**
 * A RIFF file.
 *
 * The buffer is structured as follows:
 *
 * 0x00: "RIFF"
 * 0x04: Size of the file, minus 8 bytes
 * 0x08: File type
 * 0x0C: Data blocks
 *
 * Each data block is structured as follows:
 *
 * 0x00: Block name
 * 0x04: Size of the block, minus 8 bytes
 * 0x08: Block data
 *
 * @see https://en.wikipedia.org/wiki/Resource_Interchange_File_Format
 * @byteorder big-endian
 *
 * @example
 * const riff = new Riff();
 * await riff.load(buffer);
 *
 * const block = riff.getBlock("data");
 * if (block) {
 *  const data = block.data;
 * }
 */
export class Riff {
  public type: string = '';
  public blocks: RiffBlock[] = [];
  public size: number = 0;

  public getBlock(name: string): RiffBlock | undefined {
    const block = this.blocks.find((block) => block.name === name);
    if (!block) {
      return undefined;
    }

    return block;
  }

  static from(buffer: Buffer) {
    const stream = new DataView(buffer.buffer);
    const riff = new Riff();
    riff.load(stream);
    return riff;
  }

  public async load(stream: DataView) {
    const utf8 = new TextDecoder('utf-8');
    const magic = utf8.decode(stream.buffer.slice(0, 4));
    if (magic !== 'RIFF') {
      throw new Error('Invalid magic number');
    }

    this.size = stream.getUint32(4, false);
    this.type = utf8.decode(stream.buffer.slice(8, 12));

    let offset = 12;
    while (offset < this.size) {
      const name = utf8.decode(stream.buffer.slice(offset, offset + 4));
      const blocksize = stream.getUint32(offset + 4, false);

      const block = new RiffBlock();
      block.name = name;
      block.size = blocksize;
      block.data = new DataView(stream.buffer.slice(offset + 8, offset + 8 + blocksize));
      this.blocks.push(block);

      offset += 8 + blocksize;
    }

    return this.blocks.length;
  }
}
