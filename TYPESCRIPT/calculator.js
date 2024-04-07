"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var getInput = function (prompt) {
    var userInput = readlineSync.question(prompt);
    var parsedInput = parseFloat(userInput);
    if (isNaN(parsedInput)) {
        console.log("Invalid input");
        process.exit(1);
    }
    return parsedInput;
};
var performOperation = function () {
    var firstNum = getInput("Enter first number: ");
    var operation = readlineSync.question("Enter Operation: ");
    var secondNum = getInput("Enter second number: ");
    var result;
    switch (operation) {
        case "+":
            result = firstNum + secondNum;
            break;
        case "-":
            result = firstNum - secondNum;
            break;
        case "*":
            result = firstNum * secondNum;
            break;
        case "/":
            if (secondNum !== 0) {
                result = firstNum / secondNum;
            }
            else {
                console.log("Error: Cannot divide by 0");
                process.exit(1);
            }
            break;
        default:
            console.log("Invalid Operation");
            process.exit(1);
            break;
    }
    console.log("Answer: ".concat(result));
};
performOperation();
