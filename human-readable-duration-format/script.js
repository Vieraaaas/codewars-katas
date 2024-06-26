function formatDuration(timeInSeconds) {
  let result = "";

  let seconds = (timeInSeconds % 60) + " second";
  let minutes = Math.floor((timeInSeconds / 60) % 60) + " minute";
  let hours = Math.floor((timeInSeconds / 3600) % 24) + " hour";
  let days = Math.floor((timeInSeconds / 86400) % 365) + " day";
  let years = Math.floor(timeInSeconds / 31536000) + " year";

  const duration = [seconds, minutes, hours, days, years];

  for (let unit of duration) {
    if (timeInSeconds === 0) {
      result = "now";
    } else {
      if (result.length > 7 && result.includes("and") && unit[0] != "0") {
        result = ", " + result;
      } else if (result.length > 7 && !result.includes(",") && unit[0] != "0") {
        result = " and " + result;
      }

      if (unit[0] === "1" && unit[1] === " ") {
        result = unit + result;
      } else if (unit[0] != "0") {
        result = unit + "s" + result;
      }
    }
  }
  return result;
}
