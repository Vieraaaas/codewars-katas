function isIsogram(str) {
  for (let i = 0; i < str.length; i++) {
    for (let e = i + 1; e < str.length; e++) {
      if (str[i].toLowerCase() === str[e].toLowerCase()) {
        return false;
      }
    }
  }
  return true;
}
