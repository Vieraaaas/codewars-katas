function descendingOrder(n) {
  let result = "";
  const array = Array.from(n.toString());
  array.sort().reverse();
  for (num of array) {
    result += num;
  }
  return Number(result);
}
