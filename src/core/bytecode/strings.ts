import { isAscii } from "buffer";

class StringInfo {
  constructor(
    public text: string,
    public encoding: BufferEncoding,
    public nullTerminated: boolean
  ) {}
}

export class StringTable {
  private strings: Map<number, StringInfo> = new Map();

  public get size() {
    return this.strings.size;
  }

  public load(buffer: DataView) {
    const offsets = [];
    const string_count = buffer.getUint32(0, false);

    for (let i = 0; i < string_count; i++) {
      offsets.push(buffer.getUint32(4 + i * 4, false));
    }

    let offset = 4 + string_count * 4;

    for (let i = 0; i < string_count; i++) {
      let string_start = offset + offsets[i];
      let string_end = offset + offsets[i + 1];

      if (isNaN(string_end) || string_end > buffer.byteLength) {
        string_end = buffer.byteLength;
      }

      let data = Buffer.from(buffer.buffer.slice(string_start, string_end));
      let text = data.toString("utf8");
      let encoding: BufferEncoding = "utf8";

      if (!isAscii(data)) {
        text = data.toString("hex");
        encoding = "hex";
      }

      this.strings.set(
        i,
        new StringInfo(
          text,
          encoding,
          data.length > 0 ? data[data.length - 1] === 0 : false
        )
      );
    }
  }

  public get(index: number): StringInfo | undefined {
    return this.strings.get(index);
  }

  public set(index: number, text: string, encoding: BufferEncoding) {
    const nullTerminated = text[text.length - 1] === "\0";
    if (!nullTerminated) text += "\0";
    this.strings.set(index, new StringInfo(text, encoding, true));
  }

  public add(text: string, encoding: BufferEncoding = "utf8"): number {
    const nullTerminated = text[text.length - 1] === "\0";
    if (!nullTerminated) text += "\0";
    const index = this.strings.size;
    this.strings.set(index, new StringInfo(text, encoding, true));
    return index;
  }

  public save(): Buffer {
    const strings = Array.from(this.strings.values()).map((it) => {
      return Buffer.from(it.text, it.encoding);
    });

    const stringsSize = strings.reduce((acc, it) => acc + it.length, 0);
    const buffer = Buffer.alloc(4 + strings.length * 4 + stringsSize);

    // the first 4 bytes are the number of strings
    buffer.writeUint32BE(strings.length, 0);

    // the next 4 bytes are the offsets to each string after the offset table
    const offsets = [];
    let offset = 0;
    for (let [index, string] of strings.entries()) {
      offsets.push(offset);
      offset += string.length;
    }

    // now write the strings at the correct offsets after the offset table
    for (let [index, string] of strings.entries()) {
      buffer.writeUint32BE(offsets[index], 4 + index * 4);
      string.copy(buffer, 4 + strings.length * 4 + offsets[index]);
    }

    return buffer;
  }
}
