'use strict';

function reverseArray(arr) {
  const backwards = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    backwards.push(arr[i]);
  }
  return backwards;
}

module.exports = reverseArray;
