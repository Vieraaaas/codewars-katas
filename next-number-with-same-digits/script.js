function nextBigger(n) {
  let result = -1;
  const number = n.toString();
  const newNumber = n;
  let Arr1 = [];

  for (let i1 = 0; i1 < number.length; i1++) {
    Arr1.push(number[i1]);
  }

  while (n.toString().length === number.length) {
    let Arr2 = [];
    n++;

    for (let i2 = 0; i2 < n.toString().length; i2++) {
      Arr2.push(n.toString()[i2]);
      console.log("Arr1 " + Arr1.sort());
      console.log("Arr2 " + Arr2.sort());

      if (Arr1.sort() === Arr2.sort()) {
        console.log("Treffer");
        result = n;
        break;
      }
    }
  }

  return result;
}
