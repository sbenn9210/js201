// Write a function "makeSquare" which is given a size and returns a square of
// that size using asterisks.
// Example:
// makeSquare(5)
// *****
// *****
// *****
// *****
// *****

function makeSquare(num) {
  var star = "*";
  var square = "";
  for (var i = 0; i < num; i++) {
    square += star.repeat(num) + "\n";
  }
  return square.trim();
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBox" which is given a width and height and returns a
// hollow box of those dimensions.
// Example:
// makeBox(6, 4)
// ******
// *    *
// *    *
// ******

function makeBox(width, height) {
  var shape = "";
  for (j = 1; j <= height; j++) {
    for (i = 1; i <= width; i++) {
      if (i == 1 || i == width || j == 1 || j == height) {
        shape += "*";
      } else {
        shape += " ";
      }
    }
    shape += "\n";
  }
  return shape.trim();
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBanner" which is given some text and returns a banner
// with a border surrounding the text. The border should stretch to the length
// of the text.
// Example:
// makeBanner('Welcome to DigitalCrafts')
// ****************************
// * Welcome to DigitalCrafts *
// ****************************

function makeBanner(text) {
  var textArr = text.split("");
  textArr.unshift("  ", " ");
  textArr.push(" ", " ");
  var shape = "";
  for (j = 1; j <= 3; j++) {
    for (i = 1; i <= textArr.length; i++) {
      if (i == 1 || i == textArr.length || j == 1 || j == 3) {
        shape += "*";
      } else {
        shape += textArr[i - 1];
      }
    }
    shape += "\n";
  }
  return shape.trim();
}
