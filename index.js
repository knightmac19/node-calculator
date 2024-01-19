const readlineSync = require("readline-sync");

let validInitialQuery = false;
let validFirstNum = false;
let validSecondNum = false;
let operation = "";
let firstNum = "";
let secondNum = "";
let possibilities = "1234567890";

while (validInitialQuery === false) {
  operation = readlineSync.question(
    "What operation would you like to perform? (Options: /, *, +, - )   "
  );

  if (
    operation !== "/" &&
    operation !== "*" &&
    operation !== "+" &&
    operation !== "-"
  ) {
    console.log("\n");
    console.log("That is not a valid operation. Please enter /, *, +, or -");
  } else {
    validInitialQuery = true;
  }
}

while (validFirstNum === false) {
  firstNum = readlineSync.question("Please enter the first number:   ");
  let possibilities = "1234567890";

  if (isNaN(firstNum)) {
    console.log("\n");
    console.log("That is not a valid input. Please enter a number");
  } else {
    validFirstNum = true;
  }
}
while (validSecondNum === false) {
  secondNum = readlineSync.question("Please enter the second number:   ");

  let possibilities = "1234567890";

  if (operation === "/") {
    possibilities = "123456789";
  }

  if (isNaN(secondNum)) {
    console.log("\n");
    console.log("That is not a valid input. Please enter a number");
  } else if (operation === "/" && secondNum === "0") {
    console.log("\n");
    console.log(
      "Invalid input. Division by 0 is not permitted. Please enter a positive number"
    );
  } else {
    validSecondNum = true;
  }
}

const runCalculation = (operator, first, second) => {
  let result = 0;

  if (operator === "*") {
    result = first * second;
  } else if (operator === "/") {
    result = first / second;
  } else if (operator === "+") {
    result = first + second;
  } else {
    result = first - second;
  }

  if (result.toString().length > 1) {
    return result.toFixed(2);
  } else {
    return result;
  }
};

let firstInt = parseInt(firstNum);
let secondInt = parseInt(secondNum);

console.log("\n");
console.log(`The result is: ${runCalculation(operation, firstInt, secondInt)}`);
