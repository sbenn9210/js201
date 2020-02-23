var alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

// Write a function "cipher" which is given a string, a shift, and returns
// the Caesar cipher of the string.
// Caesar cipher --> http://practicalcryptcography.com/ciphers/caesar-cipher/
//
// Examples:
// > cipher('Genius without education is like silver in the mine', 5)
// 'ljsnzx bnymtzy jizhfynts nx qnpj xnqajw ns ymj rnsj'
// > cipher('We hold these truths to be self-evident', 8)
// 'em pwtl bpmam bzcbpa bw jm amtn-mdqlmvb'

function cipher(str, shift) {
  var splitStr = str.split("");
  var loopedLetter = "";
  var result = [];

  for (var j = 0; j < splitStr.length; j++) {
    if (!alphabet.includes(splitStr[j])) {
      result.push(splitStr[j]);
    }
    for (var i = 0; i < alphabet.length; i++) {
      if (splitStr[j] === alphabet[i] && alphabet[i + shift] !== undefined) {
        result.push(alphabet[i + shift]);
      } else if (
        splitStr[j] === alphabet[i] &&
        alphabet[i + shift] === undefined
      ) {
        loopedLetter = i + shift - alphabet.length;
        result.push(alphabet[loopedLetter]);
      }
    }
  }
  return result.join("");
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "decipher" which is given a string, a shift, and returns the
// decoded Caesar cipher message.
//
// Examples:
// > decipher('cvvcem cv fcyp!', 2)
// 'attack at dawn!'
// > decipher('ehz czlod otgpcrpo ty l hzzo', 11)
// 'two roads diverged in a wood'

function decipher(str, shift) {
  var splitStr = str.split("");
  var loopedLetter = "";
  var result = [];

  for (var j = 0; j < splitStr.length; j++) {
    if (!alphabet.includes(splitStr[j])) {
      result.push(splitStr[j]);
    }
    for (var i = 0; i < alphabet.length; i++) {
      if (splitStr[j] === alphabet[i] && alphabet[i - shift] !== undefined) {
        result.push(alphabet[i - shift]);
      } else if (
        splitStr[j] === alphabet[i] &&
        alphabet[i - shift] === undefined
      ) {
        loopedLetter = i - shift + alphabet.length;
        result.push(alphabet[loopedLetter]);
      }
    }
  }
  return result.join("");
}
