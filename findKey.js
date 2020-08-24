// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// } 
//   const findKey = function(obj, callback) {
//     for (let key in obj) {
//       if (callback(obj[key]))
//       return key
//     }
//   }

// const movies = {
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, 
// getTheKey = x => x.stars === 2// => "noma")

// assertEqual(findKey(movies,getTheKey), "noma")

const input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

const result = input.map(function(x) {
  return Math.sqrt(x.x * x.x + x.y * x.y)
})
console.log(result)
console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);