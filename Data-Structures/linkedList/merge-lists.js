'use strict';
// const LinkedList = require('./linked-list.js');

function mergeLists(list1, list2) {
  let node1Next;
  let node2Next;
  let list1Current = list1.head;
  let list2Current = list2.head;

  if (!list1Current && !list2Current) {
    return 'please enter two linked lists!';
  }
  while (list1.head !== null && list2.head !== null) {
    node1Next = list1Current.next;
    node2Next = list2Current.next;
    list1Current.next = list2Current;
    list2Current.next = node1Next;
    list1Current = node1Next;
    list2Current = node2Next;
  }
  return list1.head;
}

module.exports = mergeLists;
