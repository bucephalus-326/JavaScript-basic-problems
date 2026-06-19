


// --------------------------
// RE-SUBMITTING CODE 02
// --------------------------

// 1) Even or Odd
let result;
const check = (num) => {
  return num % 2 === 0 ? "Even" : "Odd";
};

let value = check(5);
console.log("1) Even or Odd:", value);

// 2) Result Evaluator — Pass or Fail

const evaluateResult = function (marks) {
  if (marks < 0 || marks > 100) {
    console.log("invalid Marks");
    return null;
  } else {
    return marks < 50 ? "Fail" : "Pass";
  }
};
let result2 = evaluateResult(50);
console.log("2)Result Evaluator:", result2);

// 3) Maximum Finder — Largest of Three Numbers

const findMax = (num1, num2, num3) => {
  if (num1 >= num2 && num1 >= num3) {
    return num1;
  } else if (num2 >= num1 && num2 >= num3) {
    return num2;
  } else {
    return num3;
  }
};
result3 = findMax(10, 33, 44);
console.log("03)Maximum Finder", result3);

// 4) Accumulator — Sum from 1 to N
const sumToN = function (num) {
  let total = 0;

  for (let i = 1; i <= num; i++) {
    // console.log(i, typeof total,total)

    total += i;
  }
  return total;
};
let result4 = sumToN(10);
console.log("4) Accumulator ", result4);

// 5) Multiplication Table Generator
const printTable = function (num) {
  for (let i = 1; i <= 10; i++) {
    let multiple = num;
    // console.log(i,multiple);
    multiple *= i;
    console.log(num, "x", i, "=", multiple);
  }
};

console.log("5) Multiplication");

printTable(5);

// 6) Digit Counter — Number Length Finder
const countDigits = function (num) {
  if (num === 0) return 1;

  let count = 0;

  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }

  return count;
};
console.log("6) Digit Counter",countDigits(3456));


// 7) Number Reverser

const reverseNumber = function (num) {
  let reversed = 0;

  while (num > 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }

  return reversed;
};
console.log("7) Number reverser");

console.log(reverseNumber(1234));
console.log(reverseNumber(500));
console.log(reverseNumber(91));

// 8) Factorial Engine

const factorial = function (num) {
  if (num < 0) return "Invalid input";

  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
};
console.log("8)Factorial engine");

console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(1));

// 9) Prime Validator
const isPrime = function (num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};
console.log("9)Prime Validator");

console.log(isPrime(7));
console.log(isPrime(10));
console.log(isPrime(13));
console.log(isPrime(1));

// 10) Pattern Builder — Star Triangle
const printPattern = function (num) {
  for (let i = 1; i <= num; i++) {
    let stars = "";

    for (let j = 1; j <= i; j++) {
      stars += "*";
    }

    console.log(stars);
  }
};
console.log("10)star pattern");

printPattern(5)