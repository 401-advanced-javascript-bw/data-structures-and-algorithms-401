'use strict';

const search = require('../array-binary-search.js');

describe('binary search', () => {
  it('if no key is matched, return -1', () => {
    let result = search.binarySearch([1, 2, 3, 4, 4], 9);
    expect(result).toEqual(-1);
  });
  it(' if key is match, return the index of the where the match was found', () => {
    let result = search.binarySearch([1, 2, 3, 4, 5], 2);
    expect(result).toEqual(1);
  });
});
