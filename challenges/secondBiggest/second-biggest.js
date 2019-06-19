'use strict';

function findSecondLargest(arr) {
  const newArray = new Set(arr);
  let values = newArray.values();
  const array = Array.from(values);
  let max = Math.max(...array);

  for (let i = 0; i < array.length; i++) {
    if (array[i] === max) {
      array.splice(i, 1);
    }
  }
  return Math.max(...array);
}

function second_highest(arr) {
  let second_highest = arr.sort(function(a, b) {
    return a - b;
  })[arr.length - 2];
  return second_highest;
}

function second_biggest(arr) {
  let biggest = arr[0];
  let nextBiggest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > biggest) {
      nextBiggest = biggest;
      biggest = arr[i];
    } else if (arr[i] > nextBiggest && arr[i] !== biggest) {
      nextBiggest = arr[i];
    }
  }
  return nextBiggest;
}

module.exports = { findSecondLargest, second_highest, second_biggest };
