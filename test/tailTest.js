
const tail = require('../tail');
const assertEqual = require('../assertEqual');
let nums = [5,6,7]
tail([5,6,7])
assertEqual(nums.length, 3);
let nums1 = []
tail([])
assertEqual(nums1.length, 0);