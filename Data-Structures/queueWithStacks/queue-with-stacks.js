'use strict';
class pseudoCode {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }
  enqueue(value) {
    return (this.stack1 = this.stack1.push(value));
  }
  dequeue() {
    if (this.stack2.length === 0) {
      if (this.stack1.length === 0) {
        return 'empty queue';
      }
      while (this.stack1.length > 0) {
        let num = this.stack1.pop();
        this.stack2.push(num);
      }
    }
    return this.stack2.pop();
  }
}

module.exports = pseudoCode;
