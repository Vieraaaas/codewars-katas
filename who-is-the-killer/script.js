function killer(suspectInfo, dead) {
  for (const suspect in suspectInfo) {
    suspectInfo.matches = 0;
    for (const contact of suspectInfo[suspect]) {
      for (const victim of dead) {
        if (victim === contact) {
          suspectInfo.matches += 1;
        }
      }
    }
    if (suspectInfo.matches === dead.length) {
      return suspect;
    }
  }
}
