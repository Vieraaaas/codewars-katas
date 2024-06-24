function domainName(url) {
  let domain = "";
  let splitUrl = [];
  if (url.includes("//www.")) {
    splitUrl = url.split("//www.");
  } else if (url.includes("www.")) {
    splitUrl = url.split("www.");
  } else if (url.includes("//")) {
    splitUrl = url.split("//");
  } else {
    domain = url.split(".")[0];
    return domain;
  }

  domain = splitUrl[1].split(".")[0];

  return domain;
}
