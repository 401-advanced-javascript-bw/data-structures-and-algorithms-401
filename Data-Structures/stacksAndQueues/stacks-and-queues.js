'use strict';

class Stack {
  constructor() {
    this.storage = [];
    this.top = null;
    this.length = 0;
  }

  push(value) {
    this.length++;
    this.top = value;
    return this.storage.push(value);
  }

  peek() {
    return this.top;
  }

  pop() {
    this.top = this.storage[this.storage.length - 2];
    this.length > 0 && this.length--;
    return this.storage.pop() || null;
  }
}

class Queue {
  constructor() {
    this.storage = [];
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  enqueue(value) {
    this.storage.unshift(value);
    this.front = this.storage[this.storage.length - 1];
    this.rear = value;
    this.length++;
  }

  dequeue() {
    this.front =
      this.storage.length === 1 ? null : this.storage[this.storage.length - 1];
    this.rear = this.storage[0];
    this.length > 0 && this.length--;
    return this.storage.pop() || null;
  }

  peek() {
    return this.front;
  }
}

module.exports = { Stack, Queue };
