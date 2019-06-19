'use strict';

const BST = require('../../tree/tree.js').BinarySearchTree;
const findValue = require('../depth-of-value.js');

describe('Find Depth of Value in Binary Tree', () => {
  it('Returns null if empty tree', () => {
    let tree = new BST();
    expect(findValue(tree.root, 10)).toBeNull();
    expect(findValue(tree.root, 20)).toBeNull();
    expect(findValue(tree.root, 'val')).toBeNull();
  });

  it('Returns null if missing arguments', () => {
    let tree = new BST();
    expect(findValue()).toBeNull();
    expect(findValue(tree.root)).toBeNull();
  });

  it('Returns null if tree does not have value', () => {
    let tree = new BST();
    tree.add(10);
    tree.add('val');
    tree.add(5);

    expect(findValue(tree.root, 20)).toBeNull();
    expect(findValue(tree.root, 13)).toBeNull();
    expect(findValue(tree.root, 5)).toBe(1);
  });

  it('Returns depth of value if it exists in tree', () => {
    let tree = new BST();
    tree.add(10);
    tree.add(25);
    tree.add(5);
    tree.add(3);
    tree.add(8);
    tree.add(15);
    tree.add(20);

    //            10
    //        5        25
    //      3   8   15
    //                  20

    expect(findValue(tree.root, 10)).toBe(0);
    // expect(findValue(tree.root, 25)).toBe(1);
    // expect(findValue(tree.root, 3)).toBe(2);
    // expect(findValue(tree.root, 8)).toBe(2);
    // expect(findValue(tree.root, 20)).toBe(3);
  });
});
