'use strict';

const arrayShift = require('../array-shift.js');

describe('arrayShift', () => {
  it('inserts the input number into the middle index', () => {
    let result = arrayShift.insertShiftArray([1, 2, 3, 4, 5], 3);
    expect(result).toEqual([1, 2, 3, 3, 4, 5]);
  });
  it('length of array should increase by one', () => {
    let result = arrayShift.insertShiftArray([1, 2, 3, 4, 5], 3);
    expect(result.length).toEqual(6);
  });
  it('if no value, return null', () => {
    let result = arrayShift.insertShiftArray([]);
    expect(result).toBeNull;
  });
});
