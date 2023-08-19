import { VM } from './core/vm/vm';

async function main() {
  try {
    const vm = new VM();
    await vm.load('tests/test_emotion.bin');
    await vm.run();
  } catch (e) {
    console.error(e); 
  }
}

main();
