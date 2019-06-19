'use strict';

const { BinaryTree } = require('../tree.js');

describe('binary tree with preporder, inorder, and postorder', () => {
  xit('preorder should push to root first', () => {
    const tree = new BinaryTree();
    tree.preOrder(2);
    tree.preOrder(4);
    tree.preOrder(1);
    expect(tree.root.value).toBe(2);
  });
});
