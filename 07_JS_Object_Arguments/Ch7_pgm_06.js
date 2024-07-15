// Using Math.min and Math.max to constrain an argument
var line = function (lineLength) {
  var line = "========================================";
  lineLength = Math.max(0, lineLength);
  lineLength = Math.min(40, lineLength);
  return line.substr(0, lineLength);
};

var spaces = function (spaceLength) {
  var space = "                                        "; // 40 spaces
  spaceLength = Math.max(0, spaceLength);
  spaceLength = Math.min(40, spaceLength);
  return space.substr(0, spaceLength);
};

var emptyBox = function (width) {
  width = Math.max(1, Math.min(40, width)); // Ensure width is between 1 and 40
  var topBottom = line(width);
  var middle = "=" + spaces(width - 2) + "=";
  console.log(topBottom);
  for (var i = 0; i < 3; i++) {
      console.log(middle);
  }
  console.log(topBottom);
};

// Test line lengths from -20 to 60 in steps of 10
for (var i = -20; i <= 60; i += 10) {
  console.log("line(" + i + "): " + line(i));
}

// Test spaces function
console.log("spaces(10): '" + spaces(10) + "'");
console.log("spaces(40): '" + spaces(40) + "'");
console.log("spaces(50): '" + spaces(50) + "'");

// Test emptyBox function
emptyBox(12);
emptyBox(5);
emptyBox(40);

  
  
  
  /* Further Adventures
   *
   * 1) Test line lengths from -20 to 60
   *    in steps of 10.
   *
   * 2) Define a spaces function that returns a string
   *    made up of a specified number of space characters.
   *    The line of spaces returned can have a length
   *    between 0 and 40.
   *
   * 3) Add an emptyBox function
   *    that draws an empty box of specified
   *    width and height 5.
   *
   *    emptyBox(12);
   *
   *    > ============
   *    > =          =
   *    > =          =
   *    > =          =
   *    > ============
   *
   */