let firstNumber = Number(prompt("Hi! Kindly enter the first number:"));

while (!(Number(firstNumber))) {
    firstNumber = Number(prompt("Hi! Kindly enter the first number:"));
}

let secondNumber = Number(prompt("Hi! Kindly enter the second number:"));

while (!(Number(secondNumber))) {
    secondNumber = Number(prompt("Hi! Kindly enter the second number:"));
}

let thirdNumber = Number(prompt("Hi! Kindly enter the third number:"));

while (!(Number(thirdNumber))) {
    thirdNumber = Number(prompt("Hi! Kindly enter the third number:"));
}

const averageNumber = (firstNumber + secondNumber + thirdNumber) / 3

alert (`The average number from ${firstNumber}, ${secondNumber}, ${thirdNumber} is ${averageNumber}`);