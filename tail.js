
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
module.exports = tail;