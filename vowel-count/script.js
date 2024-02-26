function getCount(str) {
  let result = 0;
  let array = [];
  array = str.match(/[aeiou]/g);
  if (array !== null) {
    result = array.length;
  }
  return result;
}

//Alternate solution utilizing a loop:
//function getCount(str) {
//  let result = 0;
//  for (letter of str) {
//    if (letter === "a" || letter === "e" || letter === "i" || letter === "o"  || letter === "u") {
//      result += 1;
//    }
//  } return result;
//}
