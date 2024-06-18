function likes(names) {
  const likes = names.length;

  if (likes === 0) {
    return "no one likes this";
  } else if (likes === 1) {
    return names[0] + " likes this";
  } else if (likes === 2) {
    return names[0] + " and " + names[1] + " like this";
  } else if (likes === 3) {
    return names[0] + ", " + names[1] + " and " + names[2] + " like this";
  } else if (likes >= 4) {
    return (
      names[0] + ", " + names[1] + " and " + (likes - 2) + " others like this"
    );
  } else {
    console.error("Something went wrong.");
  }
}
