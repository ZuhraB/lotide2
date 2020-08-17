const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};
const tail = function(arr) {
  let newArray = []
  if (arr.length > 1) {
    for (let i = 1; i <= arr.length-1; i++) {
      newArray.push(arr[i])
    }
    return newArray
  } else {
    return undefined
  }
}
let nums = [5,6,7]
tail([5,6,7])
assertEqual(nums.length, 3);
let nums1 = []
tail([])
assertEqual(nums1.length, 0);
