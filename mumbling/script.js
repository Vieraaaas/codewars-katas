function accum(s) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    result += s[i].toUpperCase();
    result += s[i].toLowerCase().repeat(i);
    result += "-";
  }
  return result.slice(0, -1);
}
