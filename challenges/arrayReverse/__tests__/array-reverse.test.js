'use strict';

const reverse = require('../array-reverse.js');

describe('reverse', () => {
  it('Reverses an array of numbers', () => {
    let result = reverse([1, 2, 3, 4, 5, 6]);
    expect(result).toEqual([6, 5, 4, 3, 2, 1]);
  });
});
