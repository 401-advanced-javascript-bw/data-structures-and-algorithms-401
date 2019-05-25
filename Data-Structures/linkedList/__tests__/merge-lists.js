'use strict';

const LinkedList = require('../linked-list.js');
const mergeLists = require('../merge-lists.js');

describe('merge linked lists', () => {
  it('should merge two linked lists', () => {
    let list1 = new LinkedList();
    list1.insert(1);
    list1.insert(1);
    list1.insert(1);
    let list2 = new LinkedList();
    list2.insert(2);
    list2.insert(2);
    list2.insert(2);
    let result = mergeLists(list1, list2);
    expect(result.data).toEqual(1);
  });
});
