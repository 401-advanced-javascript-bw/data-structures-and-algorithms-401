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
    // console.log(message);
    return message;
  }
}

module.exports = LinkedList;
