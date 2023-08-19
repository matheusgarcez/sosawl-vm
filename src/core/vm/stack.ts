export class Stack {
  public stack: number[] = [];
  public stack_ptr: number = 0;

  public constructor(public size: number) {}

  public get position() {
    return this.stack_ptr;
  }

  public set position(value: number) {
    this.stack_ptr = value;
    if (this.stack_ptr > this.size) {
      throw new Error('Stack overflow');
    }
  }

  public at(index: number) {
    return this.stack[index];
  }

  top() {
    return this.stack[this.stack_ptr - 1];
  }

  public push(value: number) {
    if (this.stack_ptr >= this.size) {
      throw new Error('Stack overflow');
    }
    this.stack[this.stack_ptr++] = value;
  }

  public pop(): number {
    if (this.stack_ptr <= 0) {
      throw new Error('Stack underflow');
    }

    return this.stack[--this.stack_ptr];
  }

  public swap() {
    const a = this.pop();
    const b = this.pop();
    this.push(a);
    this.push(b);
  }

  public duplicate() {
    const a = this.pop();
    this.push(a);
    this.push(a);
  }

  compare() {
    const a = this.pop();
    const b = this.pop();
    return (a < b ? -1 : (a > b ? 1 : 0));
  }

  public store(value: number) {
    this.stack[this.stack_ptr - 1] = value;
  }

  public reset() {
    this.stack_ptr = 0;
    this.stack = [];
  }

  public print() {
    console.log(`[ DEBUG]: `);
    console.log(`[ DEBUG]: Stack (${this.stack_ptr}/${this.size}))`);
    console.log(`[ DEBUG]: ==================`);
    for (let i = 0; i < this.stack_ptr; i++) {
      if (i == this.stack_ptr - 1) {
        console.log(`[ DEBUG]:   ${i}: ${this.stack[i]} <`);
      } else {
        console.log(`[ DEBUG]:   ${i}: ${this.stack[i]}`); 
      }
    }
    console.log(`[ DEBUG]: ==================`);
    console.log(`[ DEBUG]: `);
  }
}
