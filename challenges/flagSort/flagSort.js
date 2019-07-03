'use strict';

function swap(arr, pointA, pointB) {
  const temp = pointA;
  arr[pointB] = arr[pointA];
  arr[pointA] = temp;
}

function flagSort(arr) {
  const center = Math.floor(arr.length / 2);
  let leftBlueIndex = 0;
  let rightBlueIndex = arr.length - 1;
  let blueCount = 0;
  let index = 0;

  while (index < rightBlueIndex + 1) {
    if (index === center) {
      index++;
      // continue;
    } else if (arr[index] === 'shield') {
      swap(arr, index, center);
    } else if (arr[index] === 'blue') {
      blueCount++;
      if (blueCount % 2) {
        swap(arr, index, center);
        rightBlueIndex--;
      } else {
        swap(arr, index, leftBlueIndex);
        leftBlueIndex++;
        index++;
      }
    } else {
      index++;
    }
    console.log(arr);
  }
  return arr;
}

module.exports = flagSort;
