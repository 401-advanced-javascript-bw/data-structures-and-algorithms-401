'use strict';

const leftJoin = require('../left-join.js');

describe('leftJoin', () => {
  it('should return an array', () => {
    const table1 = new Map();
    table1.set('happy', 'excited');

    const table2 = new Map();
    table2.set('happy', 'sad');
    let result = leftJoin(table1, table2);
    expect(result).toEqual([['happy', 'excited', 'sad']]);
  });
  it('should return null for a key that does not exist in table two but exists in table one', () => {
    const table1 = new Map();
    table1.set('happy', 'excited');
    table1.set('fat', 'thick');

    const table2 = new Map();
    table2.set('happy', 'sad');

    let result = leftJoin(table1, table2);
    expect(result[1].pop()).toBeNull();
  });
});
