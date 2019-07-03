'use strict';
const linkedList = require('../../Data-Structures/linkedList/linked-list.js');

function findPath(node, value1, value2) {
  const list = new linkedList();
  if (!node) {
    return null;
  }
  if (node === value2) {
    return list;
  }
}

function findStart(node, value1) {
  //find starting node in tree
  if (!node) {
    return null;
  }
  if (node.value === value1) {
    return node;
  }
  if (node.left) {
    findStart(node.left);
  }
  if (node.right) {
    findStart(node.right);
  }
}
