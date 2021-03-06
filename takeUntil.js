const takeUntil = function(array, callback) {
  //arr.filter((number) => number > 5);
   let newArray = [];
   for (let i of array) {
     if (callback(i)) {
    break;
     }
     newArray.push(i)
   }
   return newArray
}
const assertArraysEqual = function(arr1,arr2) {
  if(eqArrays(arr1,arr2)) {
    console.log(`✅✅✅ Assertion Passed${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
}
const eqArrays = function(arr1, arr2){
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
     return false
    }  
  }
  return true
}
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ] )
assertArraysEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ] )