function solution(list) {
  let result = list[0].toString();

  for (let i = 0; i < list.length; i++) {
    const nextNumber = list[i + 1];
    const afterNextNumber = list[i + 2];
    const lastChar = result.charAt(result.length - 1);

    if (
      list[i] + 1 === nextNumber &&
      nextNumber + 1 === afterNextNumber &&
      lastChar != "-"
    ) {
      result += "-";
    }

    if (list[i] + 1 === nextNumber && nextNumber + 1 != afterNextNumber) {
      if (lastChar != "," && lastChar != "-") {
        result += ",";
      }
      result += nextNumber;
    }

    if (list[i] + 1 != nextNumber && nextNumber != undefined) {
      result += "," + nextNumber;
    }
  }
  return result;
}
