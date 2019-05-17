'use strict';

const linkedList = require('./Data-Structures/linkedList/linked-list.js');

const list = new linkedList();

list.insert('test');
list.insert('test2');

console.log(list);
console.log('☺️', list.includes('test6'));
console.log('💩', list.printList());
