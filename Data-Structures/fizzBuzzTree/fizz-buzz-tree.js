'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class Tree {
  constructor(value) {
    this.root = new Node(value);
  }
  fizzBuzz(val) {
    if (typeof val !== 'number') {
      return val;
    }
    if (val % 15 === 0) {
      return 'fizzbuzz';
    }
    if (val % 3 === 0) {
      return 'fizz';
    }
    if (val % 5 === 0) {
      return 'buzz';
    }
  }
  traverseTree(node) {
    if (this.root === null) {
      return;
    }
    this.root.value = this.fizzBuzz(node.value);
    if (this.root.left) {
      this.fizzBuzztraverseTree(this.root.left);
    }
    if (this.root.right) {
      this.fizzBuzztraverseTree(this.root.right);
    }
  }
}

module.exports = Tree;
