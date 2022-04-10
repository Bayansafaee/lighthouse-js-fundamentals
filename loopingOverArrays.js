// creates a line of * for a given length
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* ";
  }
  return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.

function buildTriangle(length) {
  var triangle = "";
  for (var newLine = 1; newLine <= length; newLine++) {
    triangle += makeLine(newLine);
  }
  return triangle;
}

// test your code by uncommenting the following line