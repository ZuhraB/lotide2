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
letter = "lighthouse in the house";
console.log(letterPositions(letter))