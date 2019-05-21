'use strict';

const Node = require('../lib/node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
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
    while (current.next !== null) {
      current = current.next;
    }
    current.next = new Node(value);
    current.next.next = null;
  }

  insertBefore(existingVal, newVal) {
    let current = this.head;
    while (current.next && current.next.data !== existingVal) {
      let newNode = new Node(newVal);
      newNode.next = current.next;
      current.next = newNode;
      return;
    }
    return 'Exception';
  }

  insertAfter(existingVal, newVal) {
    let current = this.head;
    while (current.value !== existingVal) {
      let newNode = new Node(newVal);
      newNode.next = current.next;
      current.next = newNode;
      return;
    }
    return 'Exception';
  }
}

module.exports = LinkedList;
