function highAndLow(numbers) {
  let numbersArr = numbers.split(" ");
  let result = "";
  numbersArr = numbersArr.sort(function (a, b) {
    return a - b;
  });
  result = numbersArr[numbersArr.length - 1] + " " + numbersArr[0];
  return result;
}
