const assertArraysEqual = require('./assertArraysEqual');
const middle = function(arr) {
  let newArray = [];
  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 !== 0) {
    for (let i = 0; i < arr.length; i++) {
      newArray.push(arr[Math.floor(arr.length / 2)])
      return newArray;
    }
  } else {
    for (let i = 0; i < arr.length; i++) {
      newArray.push(arr[arr.length / 2 -1], arr[arr.length / 2 ])
      return newArray;
    }
  }
}
module.exports = middle;

