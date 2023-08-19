
    let _script_stack: any[] = [];
    console.log(syscall.name, _stack_args);

    const stackPop = () => {
      console.log('popped', this.vm.stack.pop());
      console.log('before:', _stack_args);
      _stack_args.pop();
      console.log('after:', _stack_args);

      if (--_stack_pos < 0) {
        this.args = _script_stack;
      }
    };

    while (_stack_pos > 0) {
      if (_stack_args[0] == ArgType.TYPE_2) {
        _script_stack[_stack_pos] = this.vm.stack.top() / (1 << this.vm.script?.operand_size!);
        stackPop();
      }
      else if (_stack_args[0] == ArgType.STRING_3) {
        const str_offset = this.vm.stack.top() >> this.vm.script?.operand_size!;
        if (str_offset > this.vm.script?.strings!.size!) {
          _script_stack[_stack_pos] = 'Error';
        } else {
          _script_stack[_stack_pos] = this.vm.script?.strings!.get(str_offset)?.text;
        }
        stackPop();
      }
      else {
        _script_stack[_stack_pos] = 0;
        stackPop();
      }
    }

    _script_stack[_stack_pos] = this.vm.stack.top() >> this.vm.script?.operand_size!;

    console.log(_script_stack);
