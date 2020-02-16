// Write a function "gcd" that returns the Greatest Common Divisor of two numbers
// If no GCD exists, return 1
// Greatest Common Divisor --> https://tinyurl.com/gr84qca
//
// Examples:
// gcd(5, 1) --> 1
// gcd(3, 15) --> 3
// gcd(50, 20) --> 10

function gcd(num1, num2) {
  var largerNum = num1 > num2 ? (largerNum = num1) : (largerNum = num2);
  var commonDivisor = [];
  for (var i = 1; i <= largerNum; i++) {
    if (num1 % i == 0 && num2 % i === 0) {
      commonDivisor.push(i);
    }
  }
  return Math.max(...commonDivisor);
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "factors" which is given a number and returns an array
// containing all its factors.
// What are factors? --> https://tinyurl.com/gncg62o
//
// Examples:
// factors(1) --> [1]
// factors(12) --> [1, 2, 3, 4, 6, 12]
// factors(42) --> [1, 2, 3, 6, 7, 14, 21, 42]

function factors(num) {
  var factorsArr = [];
  var i = 1;
  while (i < num + 1) {
    if (num % i === 0) {
      factorsArr.push(i);
    }
    i++;
  }
  return factorsArr;
}
