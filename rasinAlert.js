// const raisinAlarm = function(cookie) {
//   for (let item of cookie) {
//     if (item === "🍇") {
//       return "Raisin alert!";
//     };
//   }
//   return "All good!"
// };
const raisinAlarmArray = function(cookies) {
  let newArray = [];
   for (let item of cookies) {
    for (let j of item) {
      if (j === "🍇") {
        newArray.push("Raisin alert!");
        break;
      } 
    }  
  }
  newArray.push("All is good");
  return newArray
};
// for (let i = 0; i < cookies.length; i++){
//   cookies[i].includes("🍇") ? newArray.push('Raisin Alert') : newArray.push('All good!')
// }
// return newArray
// }

console.log(raisinAlarmArray(
  [
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"]
  ]
));

//console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
//console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
//console.log(raisinAlarm(["🍫", "🍫", "🍫"]));
