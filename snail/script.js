snail = function (array) {
  let result = [];
  let currentNumber = 0;

  for (let topArray = 0; topArray < array.length; topArray++) {
    //left to right
    while (array[topArray].length > 0) {
      currentNumber = array[topArray].splice(0, 1);
      result.push(...currentNumber);
    }

    //top to bottom
    for (let i = 1; i < array.length - 1; i++) {
      currentNumber = array[i].splice(-1, 1);
      result.push(...currentNumber);
    }

    //right to left
    while (array[array.length - (1 + topArray)].length > 0) {
      currentNumber = array[array.length - (1 + topArray)].splice(-1, 1);
      result.push(...currentNumber);
    }

    //bottom to top
    for (let i = array.length - 1; i > 0; i--) {
      currentNumber = array[i].splice(0, 1);
      result.push(...currentNumber);
    }
  }

  return result;
};
