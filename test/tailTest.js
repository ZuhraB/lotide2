
 const tail = require('../tail');
// const assertEqual = require('../assertEqual');
// let nums = [5,6,7]
// tail([5,6,7])
// assertEqual(nums.length, 3);
// let nums1 = []
// tail([])
// assertEqual(nums1.length, 0);

const assert = require('chai').assert;
describe ("#tail", () => {
  it ('should return [6,7] for [5, 6, 7]', () => {
    assert.deepEqual(tail([5,6,7]),[6,7] )
  })
  it ('should return [] for []', () => {
    assert.deepEqual(tail([]), undefined)
  })
})