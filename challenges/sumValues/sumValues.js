'use strict';

function findIntegers(arr, value) {
  let sumOne;
  let sumTwo;
  let result;
  for (let i = 0; i < arr.length; i++) {
    sumOne = arr[i];
    for (let j = 0; j < arr.length; j++) {
      if (j !== i) {
        if (arr[j] + sumOne === value) {
          sumTwo = arr[j];
          result = [sumOne, sumTwo];
          return result;
        }
      }
    }
  }
  return sumOne + sumTwo === value ? result : [];
}

function findTwoNumbers(arr, value) {
  let result;
  for (let index in arr) {
    let target = value - arr[index];
    if (arr.includes(target) && arr.indexOf(target) !== index) {
      result = [arr[index], target];
    }
  }
  return result ? result : [];
}

module.exports = { findIntegers, findTwoNumbers };
