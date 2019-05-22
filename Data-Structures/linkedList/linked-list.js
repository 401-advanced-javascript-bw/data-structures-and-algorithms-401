'use strict';

const Node = require('../lib/node.js');

class LinkedList {
  constructor() {
    this.head = null;
    this.count = 0;
  }

  insert(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
    this.count++;
  }

  includes(value) {
    let thisNode = this.head;
    let boolean = false;
    while (thisNode) {
      if (thisNode.data === value) {
        boolean = true;
      }
      thisNode = thisNode.next;
    }
    return boolean;
  }

  printList() {
    let thisNode = this.head;
    let message = '';

    if (!this.head) return 'empty';

    message += `${thisNode.data} `;

    while (thisNode.next !== null) {
      thisNode = thisNode.next;
      message += `${thisNode.data}`;
    }
    return message;
  }

  append(value) {
    let current = this.head;
    if (!current) {
      current = new Node(value);
    }
    while (current.next !== null) {
      current = current.next;
    }
    current.next = new Node(value);
    current.next.next = null;
    this.count++;
  }

  insertBefore(existingVal, newVal) {
    let current = this.head;
    this.count++;
    // while (current.next && current.next.data !== existingVal) {
    //   let newNode = new Node(newVal);
    //   newNode.next = current.next;
    //   current.next = newNode;
    //   return;
    // }

    while (current.data !== existingVal) {
      current = current.next;
    }
    let newNode = new Node(newVal);
    newNode.next = current.next;
    current.next = current.next.next;
    // return 'Exception';
  }

  insertAfter(existingVal, newVal) {
    let current = this.head;
    this.count;
    while (current.value !== existingVal) {
      let newNode = new Node(newVal);
      newNode.next = current.next;
      current.next = newNode;
      return;
    }
    return 'Exception';
  }

  valueFromEnd(value) {
    if (this.head === null) {
      return null;
    }
    let slow = this.head;
    let fast = this.head;
    for (let i = 0; i < value + 1; i++) {
      fast = fast.next;
    }
    while (fast !== null) {
      slow = slow.nex;
      fast = fast.next;
    }
    return slow.data;
  }
}

module.exports = LinkedList;
