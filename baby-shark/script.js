function babySharkLyrics() {
  let result = "";
  const lyrics = [
    "Baby shark",
    "Mommy shark",
    "Daddy shark",
    "Grandma shark",
    "Grandpa shark",
    "Let's go hunt",
  ];
  for (x of lyrics) {
    result += (x + "," + " doo".repeat(6) + "\n").repeat(3) + x + "!" + "\n";
  }
  return (result += "Run away,…");
}

// Declaring the loop "for (verse of lyrics)" makes the code more readable but
// exceeds the 300 character limit of the test on Codewars.
