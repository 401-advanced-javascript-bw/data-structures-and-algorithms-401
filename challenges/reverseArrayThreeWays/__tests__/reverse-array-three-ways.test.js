const firstReverseArray = require('../reverse-array-three-ways')
  .firstReverseArray;
const secondReverseArray = require('../reverse-array-three-ways')
  .secondReverseArray;
const thirdReverseArray = require('../reverse-array-three-ways')
  .thirdReverseArray;
const fourthReverseArray = require('../reverse-array-three-ways')
  .fourthReverseArray;

describe('firstReverseArray', () => {
  it('should reverse the array using for loop', () => {
    let result = firstReverseArray([1, 2, 3, 4, 5, 6]);
    expect(result).toEqual([6, 5, 4, 3, 2, 1]);
  });
  it('should return empty array as a result if empty array is given', () => {
    let result = firstReverseArray([]);
    expect(result).toEqual([]);
  });
});

describe('secondReverseArray', () => {
  it('should reverse the array using recursion', () => {
    let result = secondReverseArray([1, 2, 3, 4, 5, 6]);
    expect(result).toEqual([6, 5, 4, 3, 2, 1]);
  });
});

describe('thirdReverseArray', () => {
  it('should reverse the array using reverse method', () => {
    let result = thirdReverseArray([1, 2, 3, 4, 5, 6]);
    expect(result).toEqual([6, 5, 4, 3, 2, 1]);
  });
});

describe('fourthReverseArray', () => {
  it('should reverse the array using reduce', () => {
    let result = fourthReverseArray([1, 2, 3, 4, 5, 6]);
    expect(result).toEqual([6, 5, 4, 3, 2, 1]);
  });
});
