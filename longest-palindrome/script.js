function longestPalindrome(str) {
  const characters = str.toLowerCase().match(/[a-z0-9]/g);
  let result = 0;

  for (let index = 0; index < characters.length; index++) {
    for (let check = index + 1; check < characters.length; check++) {
      if (
        characters[index] === characters[check] &&
        characters[index] !== undefined
      ) {
        result += 2;
        characters[index] = undefined;
        characters[check] = undefined;
      }
    }
  }
  if (characters.length > result) {
    result += 1;
  }
  return result;
}

//1. Count the characters, DON'T actually build the palindrome
//2. Get rid of everything that isn't a letter or a number.
//3. Convert all letters to lowercase
//4. The palindrome can contain
//  - every two matching characters
//  - one single character without a match (it will be in the center)
