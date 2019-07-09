'use strict';

const pseudoCode = require('../queue-with-stacks.js');

describe('queue with stacks', () => {
  xit('should add values to beginning of queue', () => {
    const queue = new pseudoCode();
    queue.enqueue(2);
    console.log(queue.stack1);
    expect(queue.stack1).toEqual(2);
  });
});
