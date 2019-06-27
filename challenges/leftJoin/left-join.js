'use strict';

module.exports = function leftJoin(table1, table2) {
  const mainArray = [];
  table1.forEach((value, key) => {
    let subArray = [];
    subArray.push(key, value);
    table2.has(key) ? subArray.push(table2.get(key)) : subArray.push(null);
    mainArray.push(subArray);
  });
  return mainArray;
};
