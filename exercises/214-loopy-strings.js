// TIP: check out these references for Strings and Arrays:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "reverse" that computes the reversal of a string.
//
// Example:
// reverse("skoob") --> "books"
function reverse(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "findLongestWord" that takes a string of words and returns
// the longest word in that string. If there are multiple words with the same
// maximum length return the first longest word.
//
// Example:
// findLongestWord('a book full of dogs') --> 'book'
function findLongestWord(str) {
  var splitStr = str.split(" ");
  var greatestStr = splitStr.reduce((a, b) => {
    return (greatestStr = a.length >= b.length ? a : b);
  });
  return greatestStr;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "nicer"
// It should clean up the language in its input sentence.
// Forbidden words include heck, darn, dang, and crappy.
//
// Example:
// nicer('mom get the heck in here and bring me a darn sandwich.')
// > 'mom get the in here and bring me a sandwich.'

function nicer(sentence) {
  var nicerSentence = sentence.split(" ");

  nicerSentence.map(word => {
    if (
      word === "heck" ||
      word === "darn" ||
      word === "dang" ||
      word === "crappy"
    ) {
      nicerSentence.splice(nicerSentence.indexOf(word), 1);
    }
  });
  return nicerSentence.join(" ");
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "capitalizeAll"
// It should take as input a sentence and capitalize the first letter
// of every word in the sentence.
//
// Examples:
// capitalizeAll('hello world') --> 'Hello World'
// capitalizeAll('every day is like sunday') --> 'Every Day Is Like Sunday'

function capitalizeAll(sentence) {
  var splitSentence = sentence.split(" ");

  for (var i = 0; i < splitSentence.length; i++) {
    splitSentence[i] =
      splitSentence[i].charAt(0).toUpperCase() + splitSentence[i].substring(1);
  }

  return splitSentence.join(" ");
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "split" that does the same thing as String.split
// It should take two inputs: (1) a string and (2) a delimiter string
// Do not use the native .split() method for this. Your task is to reverse-engineer
// .split() and write your own.
//
// Examples:
// split('a-b-c', '-') --> ['a', 'b', 'c']
// split('APPLExxBANANAxxCHERRY', 'xx') --> ['APPLE', 'BANANA', 'CHERRY']
// split('xyz', 'r') --> ['xyz']

// ****First attempt was a no go because letters were returned in an Arr not the words**
// function split(str, delimiter) {
//   var delimiterArr = [];
//   var resultArr = [];
//   for (var i = 0; i < delimiter.length; i++) {
//     delimiterArr.push(delimiter[i]);
//     console.log(delimiterArr);
//   }
//   for (var i = 0; i < str.length; i++) {
//     if (delimiterArr[0] !== str[i]) {
//       resultArr.push(str[i]);
//     }
//   }
//   return resultArr;
// }

function split(sampleInput, delimiter) {
  var stringArray = [""];
  var letterCounter = 0;

  for (var i = 0; i < sampleInput.length; i++) {
    if (sampleInput[i] == delimiter[0]) {
      letterCounter++;
      stringArray.push("");
    } else {
      stringArray[letterCounter] += sampleInput[i];
    }
  }
  var filteredArr = stringArray.filter(word => {
    return word !== "";
  });
  return filteredArr;
}
