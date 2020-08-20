const letterPositions = function(sentence) {
  let newSentence = sentence.replace(/ /g,'')
  const results = {};
  for (let i = 0; i < newSentence.length; i++) {
    
    if (!results[newSentence[i]]) {
      results[newSentence[i]] = [i];
    } else {
      results[newSentence[i]].push(i);
    }
  }
  return results;
};
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
    console.log(`✅✅✅ Assertion Passed${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

letter1 = "hello"
assertArraysEqual((letterPositions(letter1.h),[0]))

letter = "lighthouse in the house";
console.log(letterPositions(letter))