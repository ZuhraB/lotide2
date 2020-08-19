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


const assertArraysEqual = function(arr1,arr2) {
  if(eqArrays(arr1,arr2)) {
    console.log(`✅✅✅ Assertion Passed`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:`)
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


console.log(assertArraysEqual(middle([1]),[]))// => []
console.log(assertArraysEqual(middle([1, 2]),[])) // => []

console.log(assertArraysEqual(middle([1, 2, 3]),[2]))// => [2]
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]))// => [3]

console.log(assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]))// => [2, 3]
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4])) // => [3, 4]