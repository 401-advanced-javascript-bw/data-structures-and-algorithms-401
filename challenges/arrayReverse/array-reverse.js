'use strict';
let reverse = (module.exports = {});

reverse.reverseArray = function(arr) {
  const backwards = [];
  for (let i = arr.length - 1; arr[0] >= 0; i--) {
    backwards.push(arr[i]);
  }
  return backwards;
};
