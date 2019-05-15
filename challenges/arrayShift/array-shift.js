'use strict';

let arrayShift = (module.exports = {});

arrayShift.insertShiftArray = function(arr, num) {
  if (!arr) return null;
  else {
    let middle = Math.floor(arr.length / 2);
    console.log(middle);
    arr.length++;
    for (let i = arr.length - 1; i >= arr[middle]; i--) {
      arr[i] = arr[i - 1];
    }
    arr[middle] = num;

    return arr;
  }
};
