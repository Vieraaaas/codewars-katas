function bandNameGenerator(str) {
  let result = "";
  if (str[0].toLowerCase() === str[str.length - 1].toLowerCase()) {
    result += str[0].toUpperCase() + str.slice(1).repeat(2);
  } else {
    result += "The " + str[0].toUpperCase() + str.slice(1);
  }
  return result;
}
