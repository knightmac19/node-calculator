const readlineSync = require("readline-sync");
const limit = ["+", "-", "*", "/"];

const getOperator = (limit) => {
  while (true) {
    // prettier-ignore
    const operation = readlineSync.question(`What operation would you like to perform? (Options: ${limit.join(", ")})   `);

    if (!limit.includes(operation)) {
      console.log("\n");
      console.log(
        `That is not a valid operation. Please enter ${limit.join(", ")})   `
      );
    } else {
      return operation;
    }
  }
};

const getNumber = (str, operation = "false") => {
  while (true) {
    const num = readlineSync.question(`Please enter the ${str} number:   `);

    if (isNaN(num) || num === "") {
      console.log("\n");
      console.log("That is not a valid input. Please enter a number");
    } else if (str === "second" && operation === "/" && num === "0") {
      console.log("\n");
      console.log(
        "Invalid input. Division by 0 is not permitted. Please enter a positive number"
      );
    } else {
      return +num;
    }
  }
};

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

const calculator = (limit) => {
  const operation = getOperator(limit);
  const firstInt = getNumber("first");
  const secondInt = getNumber("second", operation);

  console.log("\n");
  console.log(
    `The result is: ${runCalculation(operation, firstInt, secondInt)}`
  );
};

calculator(limit);
