let position = 0;

function getMiddle(s) {
  if (s.length % 2 !== 0) {
    position = s.length / 2;
    return s.substring(position, position + 1);
  } else {
    position = s.length / 2;
    return s.substring(position - 1, position + 1);
  }
}
