var maxSequence = function (arr) {
  const arrOfSums = [];
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let iSub = i; iSub < arr.length; iSub++) {
      sum += arr[iSub];
      arrOfSums.push(sum);
    }
  }

  const highestNumber = Math.max(...arrOfSums);
  if (highestNumber >= 0) {
    result = highestNumber;
  }

  return result;
};
