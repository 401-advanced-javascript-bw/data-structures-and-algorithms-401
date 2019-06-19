'use strict';

const linkedList = require('../linked-list.js');

describe('linked list', () => {
  it('should insert a new node', () => {
    const list = new linkedList();
    list.insert('test');
    expect(list.head.data).toEqual('test');
  });

  it('can insert multiple values', () => {
    const list = new linkedList();
    list.insert('test');
    list.insert('test2');
    expect(list.head.data).toEqual('test2');
    expect(list.head.next.data).toEqual('test');
  });

  it('returns true if linked list contains a value', () => {
    const list = new linkedList();
    list.insert('test');
    list.insert('test2');
    let result = list.includes('test');
    expect(result).toBeTruthy();
  });

  it('returns false if linked list does not contain value', () => {
    const list = new linkedList();
    list.insert('test');
    list.insert('test2');
    let result = list.includes('nope!');
    expect(result).toBeFalsy();
  });

  it('prints a string of the results.', () => {
    const list = new linkedList();
    list.insert('test');
    list.insert('test2');
    let result = list.printList();
    expect(typeof result).toEqual('string');
  });

  it('Returns all results.', () => {
    const list = new linkedList();
    list.insert('test');
    list.insert('test2');
    let result = list.printList().split(' ');
    expect(result).toEqual(['test2', 'test']);
  });

  it('value should be null if nothing was inserted.', () => {
    const list = new linkedList();
    expect(list.head).toBeNull();
  });

  it('Value can be inserted at the end of linked list', () => {
    const list = new linkedList();
    list.insert(2);
    list.append(4);
    expect(list.count).toEqual(2);
    expect(list.head.next.data).toEqual(4);
  });

  // it('Value can be inserted before specified value', () => {
  //   const list = new linkedList();
  //   list.insert(2);
  //   list.insert(3);
  //   list.insert(4);
  //   list.insertBefore(3, 2);
  //   expect(list.head.next.data).toEqual(2);
  // });
});
