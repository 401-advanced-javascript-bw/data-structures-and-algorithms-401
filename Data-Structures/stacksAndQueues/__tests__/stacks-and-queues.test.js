'use strict';

const stacksAndQueues = require('../stacks-and-queues.js');
const { Stack } = stacksAndQueues;
const { Queue } = stacksAndQueues;

describe('stacks and queues', () => {
  describe('stacks', () => {
    it('create a new stack when being called upon', () => {
      const stack = new Stack();
      expect(stack.length).toEqual(0);
    });

    it('it should add new values to the top of the stack', () => {
      const stack = new Stack();
      stack.push(4);
      stack.push(3);
      expect(stack.length).toEqual(2);
      expect(stack.top).toEqual(3);
    });

    it('it should be able to check the value at the top of the stack', () => {
      const stack = new Stack();
      stack.push(4);
      stack.push(3);
      stack.peek();
      expect(stack.top).toEqual(3);
    });

    it('it should delete values from the top of the stack', () => {
      const stack = new Stack();
      stack.push(4);
      stack.push(3);
      stack.pop();
      expect(stack.top).toEqual(4);
      expect(stack.length).toEqual(1);
    });

    it('if no items in stack, result of pop should be null', () => {
      const stack = new Stack();
      const result = stack.pop();
      expect(result).toBeNull();
    });
  });

  describe('queues', () => {
    it('should create a new queue when called upon', () => {
      const queue = new Queue();
      expect(queue.length).toEqual(0);
      expect(queue.front).toBeNull();
    });

    it('should be able to add to the queue', () => {
      const queue = new Queue();
      queue.enqueue(2);
      expect(queue.length).toEqual(1);
      expect(queue.front).toBe(2);
      expect(queue.rear).toBe(2);
    });

    it('should be able to add multiple items to queue', () => {
      const queue = new Queue();
      queue.enqueue(2);
      queue.enqueue(5);
      expect(queue.length).toEqual(2);
      expect(queue.front).toBe(2);
      expect(queue.rear).toBe(5);
    });

    it('should be able to delete items from the front of the queue', () => {
      const queue = new Queue();
      queue.enqueue(2);
      queue.enqueue(5);
      queue.enqueue(5);
      const result = queue.dequeue();
      expect(result).toEqual(2);
      expect(queue.length).toEqual(2);
      expect(queue.front).toEqual(2);
      expect(queue.rear).toEqual(5);
    });

    it('it should set front to null after dequeuing queue with only one value', () => {
      const queue = new Queue();
      queue.enqueue(2);
      queue.dequeue();
      expect(queue.front).toBeNull();
    });

    it('dequeue result should be null if there are no values in queue', () => {
      const queue = new Queue();
      const result = queue.dequeue();
      expect(result).toBeNull();
    });

    it('should return the value at the front of the stack', () => {
      const queue = new Queue();
      queue.enqueue(2);
      queue.enqueue(5);
      queue.enqueue(6);
      const result = queue.peek();
      expect(result).toBe(2);
    });

    it('if no values in stack, peek result should return null', () => {
      const queue = new Queue();
      const result = queue.peek();
      expect(result).toBeNull();
    });
  });
});
