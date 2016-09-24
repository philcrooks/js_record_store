function layout(string, layoutLength, rightAligned) {
  if (typeof string === "number") {
    if ((string % 1) > 0) {
      string = Math.round(string * 100) / 100;
    }
    string = string.toString();
  }
  var length = string.length;
  if (length > layoutLength) {
    string = ".".repeat(layoutLength);
  }
  else if (length < layoutLength) {
    var padding = " ".repeat(layoutLength - length);
    if (rightAligned)
      string = padding + string;
    else
      string += padding;
  }
  return string;
}

module.exports = layout;