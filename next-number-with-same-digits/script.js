function nextBigger(n) {
  let result = -1;
  let firstSmaller = result;
  const string = n.toString();

  for (let i = string.length - 2; i >= 0; i--) {
    if (string[i] < string[i + 1]) {
      firstSmaller = i;
      break;
    }
  }

  if (firstSmaller === -1) {
    return result;
  }

  let nextSmaller = firstSmaller + 1;
  for (let i2 = nextSmaller; i2 < string.length; i2++) {
    if (
      string[i2] > string[firstSmaller] &&
      string[i2] <= string[nextSmaller]
    ) {
      nextSmaller = i2;
    }
  }

  const digits = string.split("");
  [digits[firstSmaller], digits[nextSmaller]] = [
    digits[nextSmaller],
    digits[firstSmaller],
  ];

  const toRearrange = digits.splice(firstSmaller + 1).sort();
  result = Number(digits.concat(toRearrange).join(""));

  return result;
}

// works with small numbers but very inefficient with larger numbers
// function nextBigger(n) {
//   let result = -1;
//   const number = n.toString();
//   const newNumber = n;
//   let Arr1 = [];

//   for (let i1 = 0; i1 < number.length; i1++) {
//     Arr1.push(number[i1]);
//   }

//   while (n.toString().length === number.length) {
//     let Arr2 = [];
//     n++;

//     for (let i2 = 0; i2 < n.toString().length; i2++) {
//       Arr2.push(n.toString()[i2]);

//       if(Arr1.length === Arr2.length) {
//       if (Arr1.sort().toString() === Arr2.sort().toString()) {

//         return n
//       }}
//     }
//   }

// }
