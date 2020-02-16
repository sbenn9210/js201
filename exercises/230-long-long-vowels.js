// Write a function "longLongVowels" which is given a string, and returns a
// version of that string extending any long vowels to 5 characters.
//
// Examples:
// > longLongVowels('Good')
// 'Goooood'
// > longLongVowels('Cheese')
// 'Cheeeeese'
// > longLongVowels('Man')
// 'Man'

function longLongVowels(word) {
  var longWord = word.split("");
  var vowel = longWord.filter(function(letter, index, arr) {
    return arr[index] === arr[index + 1] ? letter : null;
  });
  return vowel.length === 0 ? word : word.replace(vowel[0], vowel[0].repeat(4));
}
