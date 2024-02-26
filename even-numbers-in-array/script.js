function isEven(arrayNumber) {
  return arrayNumber % 2 === 0;
}

function evenNumbers(array, number) {
  const evenArray = array.filter(isEven).slice(-number);
  return evenArray;
}
