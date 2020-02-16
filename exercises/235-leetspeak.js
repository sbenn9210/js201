// Write a function "leetspeak" which is given a string, and returns the
// leetspeak equivalent of the string.
// To convert text to its leetspeak version, make the following substitutions:
// A => 4
// E => 3
// G => 6
// I => 1
// O => 0
// S => 5
// T => 7
//
// HINT: What is the best data structure to represent the substitutions?
//
// Examples:
// leetspeak('Leet') --> "l337"
// leetspeak('ORANGE') --> "0r4n63"

var leetChars = {
  a: { value: 4 },
  e: { value: 3 },
  g: { value: 6 },
  i: { value: 1 },
  o: { value: 0 },
  s: { value: 5 },
  t: { value: 7 }
};

function leetspeak(str) {
  var splitStr = str.toLowerCase().split("");
  let leetArr = splitStr.map(letter => {
    return typeof leetChars[letter] === "undefined"
      ? letter
      : leetChars[letter].value;
  });

  return leetArr.join("");
}
