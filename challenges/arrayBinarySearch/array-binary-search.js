'use strict';

let search = (module.exports = {});

search.binarySearch = function(array, key) {
  let result;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === key) {
      result = i;
    }
  }
  if (typeof result !== 'number') {
    result = -1;
  }
  return result;
};
