#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "Enter first number?",
        type: "number",
        name: "firstNum",
    },
    {
        message: "Enter second number?",
        type: "number",
        name: "secondNum",
    },
    {
        message: "Select one of the operator to perform the operation?",
        type: "list",
        name: "operator",
        choices: ["Addition", "Substraction", "Multiply", "Division"],
    },
]);
if (answer.operator === "Addition") {
    console.log(answer.firstNum + answer.secondNum);
}
else if (answer.operator === "Substraction") {
    console.log(answer.firstNum - answer.secondNum);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNum / answer.secondNum);
}
else if (answer.operator === "Multiply") {
    console.log(answer.firstNum * answer.secondNum);
}
