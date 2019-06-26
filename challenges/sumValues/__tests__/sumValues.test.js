'use strict';

const findIntegers = require('../sumValues.js').findIntegers;
const findTwoNumbers = require('../sumValues.js').findTwoNumbers;

describe('findIntegers', () => {
  it('should return two values that add up to the given value', () => {
    let result = findIntegers([1, 3, 5, 4, 3], 9);
    expect(result).toEqual([5, 4]);
  });
  it('should return empty array if no two values return the sum of the given value', () => {
    let result = findIntegers([1, 3, 5, 4, 3], 20);
    expect(result).toEqual([]);
  });
});

describe('findTwoNumbers', () => {
  it('should return two values that add up to the given value', () => {
    let result = findTwoNumbers([1, 3, 5, 4, 3], 9);
    expect(result).toEqual([4, 5]);
  });
  it('should return empty array if no two values return the sum of the given value', () => {
    let result = findTwoNumbers([1, 3, 4, 6], 20);
    expect(result).toEqual([]);
  });
});
