
// // const getArguments = function(args) {
// //   args = process.argv.slice(2);
// //   let newArguments = args.join();
// // return newArguments
// // }
// // console.log(getArguments());

// // // Every "a" in the string should be replaced with a "4".
// // // Every "e" in the string should be replaced with a "3".
// // // Every "o" (oh) in the string should be replaced with a "0" (zero).
// // // Every "l" (el) in the string should be replaced with a "1" (one).

// // const password = function(word) {
// //   let newWord = getArguments(word)
// //   let str = '';
// //   for (let i = 0; i < newWord.length; i++) {
// //     if(newWord[i] === "a"){
// //     newWord1[i] === "4"
// //     }
// //     str += newWord[i]
// //   }
// //   console.log(str)
// // }
// // console.log(password())
// const flatten = function(arr) {
//   let newArray = [];
//   for (let i of arr) {
//     newArray.push(i)
//     if(Array.isArray(i)) {
//       for(let j of i) {
//         newArray.push(j)
//       }
//     }
//   }
//   return newArray
// }


// console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]

const joinList = function(arr) {
  let last = arr.slice(-1)[0]
  let str = '';
  if (arr.length === 0) {
    return str
  } else {
    for (let i = 0; i < arr.length - 1; i++) {
      str += arr[i] + ',' + ' ';
    }
  }
  return str + last
}
