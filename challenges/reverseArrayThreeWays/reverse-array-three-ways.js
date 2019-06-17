'use strict';

function firstReverseArray(arr) {
  const backwards = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    backwards.push(arr[i]);
  }
  return backwards;
}

function secondReverseArray(arr) {
  if (!arr.length) {
    return arr;
  }
  return secondReverseArray(arr.slice(1)).concat(arr[0]);
}

function thirdReverseArray(arr) {
  return arr.reverse();
}

function fourthReverseArray(arr) {
  return arr.reduce((acc, val) => {
    return [val].concat(acc);
  });
}

module.exports = {
  firstReverseArray,
  secondReverseArray,
  thirdReverseArray,
  fourthReverseArray,
};
