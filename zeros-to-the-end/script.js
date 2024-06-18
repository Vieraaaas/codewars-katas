//create new array
function moveZeros(arr) {
  const result = [];
  let zeros = 0;

  for (const entry of arr) {
    if (entry === 0) {
      zeros++;
    } else {
      result.push(entry);
    }
  }

  for (let i = 0; i < zeros; i++) {
    result.push(0);
  }

  return result;
}

// rearrange original array
// function moveZeros(arr) {
//   for (let i = arr.length-1; i >= 0; i--) {
//     if (arr[i] === 0) {
//       arr.splice(i, 1)
//       arr.push(0)
//     }
//   }

//   return arr
// }
