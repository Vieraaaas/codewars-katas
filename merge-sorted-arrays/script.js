function mergeArrays(arr1, arr2) {
  const bigArray = arr1.concat(arr2);

  const uniqueValues = bigArray.filter(function (value, index, array) {
    return array.indexOf(value) === index;
  });

  const result = uniqueValues.sort(function (a, b) {
    return a - b;
  });
  return result;
}

//verbose alternatives for the anonymous functions above:
//
//function removeDuplicates(value, index, array) {
//  return array.indexOf(value) === index;
//}
//const uniqueValues = bigArray.filter(removeDuplicates);
//
//
//function sortNumbers(a, b) {
//  return a - b;
//}
//const result = bigArray.sort(sortNumbers);
