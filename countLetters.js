const countLetters = function(str){
  let newStr = str.replace(/ /g,'')
  let result = {};
  let count = 0
  for(let letter of newStr) {
    if (!result[letter]) {
      result[letter] = 1
    } else {
      result[letter] += 1
    }
  }
 return result
}

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};
console.log(countLetters("lighthouse in the house"))
assertEqual(countLetters("lighthouse in thehouse"), {l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1})

