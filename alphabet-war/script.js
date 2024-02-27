function alphabetWar(fight) {
  let score = 0;
  for (let i = 0; i < fight.length; i++) {
    if (fight[i] === "w") {
      score += 4;
    } else if (fight[i] === "p") {
      score += 3;
    } else if (fight[i] === "b") {
      score += 2;
    } else if (fight[i] === "s") {
      score += 1;
    } else if (fight[i] === "m") {
      score -= 4;
    } else if (fight[i] === "q") {
      score -= 3;
    } else if (fight[i] === "d") {
      score -= 2;
    } else if (fight[i] === "z") {
      score -= 1;
    }
  }
  if (score > 0) {
    return "Left side wins!";
  } else if (score < 0) {
    return "Right side wins!";
  } else {
    return "Let's fight again!";
  }
}
