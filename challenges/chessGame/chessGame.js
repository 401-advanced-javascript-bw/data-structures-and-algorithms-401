'use strict';

function checkMate(array) {
  let pointA = 0;
  let pointB = 0;
  let knightResult = false;
  let rookResult = false;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === 'k') {
        pointA = i;
        pointB = j;
      }
    }
  }
  knightResult = checkKnights(array, pointA, pointB);
  return knightResult;
}

function checkKnights(array, pointA, pointB) {
  let result = false;
  if (
    array[pointA - 2][pointB - 1] === 'kn' ||
    array[pointA - 2][pointB + 1] === 'kn' ||
    array[pointA - 1][pointB - 2] === 'kn' ||
    array[pointA - 1][pointB + 2] === 'kn' ||
    array[pointA + 1][pointB - 2] === 'kn' ||
    array[pointA + 1][pointB + 2] === 'kn' ||
    array[pointA + 2][pointB - 1] === 'kn' ||
    array[pointA + 2][pointB + 1] === 'kn'
  ) {
    result = true;
  }
  return result;
}

console.log(
  checkMate([
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', 'k', '', ''],
    ['', '', '', '', '', '', 'q', ''],
    ['', '', '', '', '', '', 'kn', 'r'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', 'b', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
  ])
);
