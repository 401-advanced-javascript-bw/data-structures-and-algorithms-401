'use strict';

const flagSort = require('../flagSort.js');

describe('flagSort', () => {
  it('should return an array', () => {
    let array = ['blue', 'white', 'blue', 'white', 'shield'];
    let result = flagSort(array);

    expect(result).toEqual([0, 'white', 'blue', 'white', 'shield']);
  });
});
