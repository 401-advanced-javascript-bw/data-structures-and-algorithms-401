const findSecondLargest = require('../second-biggest.js').findSecondLargest;
const second_highest = require('../second-biggest.js').second_highest;
const second_biggest = require('../second-biggest.js').second_biggest;

describe('findSecondLargest', () => {
  it('should return the second largest number in array', () => {
    let result = findSecondLargest([1, 2, 6, 8, 3, 2]);
    expect(result).toEqual(6);
  });
  it('should return return null if empty array', () => {
    let result = findSecondLargest([]);
    expect(result).toBeNull;
  });
  it('negative values should not matter', () => {
    let result = findSecondLargest([1, -2, 6, -8, -3, 2]);
    expect(result).toEqual(2);
  });
});

describe('second_highest', () => {
  it('should return the second largest number in array by sorting first', () => {
    let result = second_highest([4, 77, 33, 56]);
    expect(result).toEqual(56);
  });
  it('should return return null if empty array', () => {
    let result = second_highest([]);
    expect(result).toBeNull;
  });
  it('negative values should not matter', () => {
    let result = second_highest([1, -2, 6, -8, -3, 2]);
    expect(result).toEqual(2);
  });
});

describe('second_biggest', () => {
  it('should return the second largest number by looping', () => {
    let result = second_biggest([4, -4, 66, 20]);
    expect(result).toEqual(20);
  });
  it('should return return null if empty array', () => {
    let result = second_biggest([]);
    expect(result).toBeNull;
  });
});
