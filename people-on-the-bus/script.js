let number = function (busStops) {
  let result = 0;
  for (stop of busStops) {
    result += stop[0];
    result -= stop[1];
  }
  return result;
};
