'use strict';
const Queue = require('../stacksAndQueues/stacks-and-queues.js').Queue;

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinaryTree {
  constructor(value) {
    this.root = new Node(value);
  }
  //preorder: Root, left, right
  preOrder(node) {
    let tree = [];
    tree.push(node.data);
    if (node.left) {
      this.preOrder(node.left);
    }
    if (node.right) {
      this.preOrder(node.right);
    }
    return tree;
  }

  //inorder: Left, root, right
  inOrder(node) {
    let tree = [];
    if (node.left) {
      this.inOrder(node.left);
    }
    tree.push(node.data);
    if (node.right) {
      this.inOrder(node.right);
    }
    return tree;
  }

  //postorder: Left, right, root
  postOrder(node) {
    let tree = [];
    if (node.left) {
      this.inOrder(node.left);
    }
    if (node.right) {
      this.inOrder(node.right);
    }
    tree.push(node.data);

    return tree;
  }
  greatestValue() {
    const queue = new Queue();
    let greatest = this.root.value;
    while (queue.length > 0) {
      this.root = queue.dequeue();
      if (this.root.value > greatest) {
        greatest = this.root.value;
      }
      if (this.root.left) {
        queue.enqueue(this.root.left);
      }
      if (this.root.right) {
        queue.enqueue(this.root.right);
      }
    }
    return greatest;
  }
}

class BinarySearchTree extends BinaryTree {
  add(value) {
    const node = new Node(value);
    if (!this.root.value) {
      this.root = node;
    }
    if (this.root.value < value) {
      this.root.right = node;
    } else {
      this.root.left = node;
    }
  }
  contains(value) {
    let result = false;
    if (value === this.root.value) {
      result = true;
    } else if (value > this.root.value) {
      this.root.value = this.root.value.right;
      this.contains(this.root.value.right);
    } else if (value < this.root.value) {
      this.root.value = this.root.value.left;
      this.contains(this.root.value.left);
    }
    return result;
  }
}

module.exports = { Node, BinaryTree, BinarySearchTree };
