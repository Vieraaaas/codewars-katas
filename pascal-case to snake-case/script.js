function toUnderscore(string) {
  let result = "";

  if (typeof string === "number") {
    result = string.toString();
  } else {
    for (let i = 0; i < string.length; i++) {
      if (
        string[i] === string[i].toUpperCase() &&
        i > 0 &&
        /\D/.test(string[i])
      ) {
        result += "_" + string[i].toLowerCase();
      } else {
        result += string[i].toLowerCase();
      }
    }
  }
  return result;
}
