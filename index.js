let firstNumber = Number(prompt("Hi! Kindly enter the first number:"));

function isNumber (number) {
    return typeof number === 'number' && !isNaN(number);
}

while (!(isNumber(firstNumber))) {
    firstNumber = Number(prompt("Hi! Kindly enter the first number:"));
}

let secondNumber = Number(prompt("Hi! Kindly enter the second number:"));

while (!(isNumber(secondNumber))) {
    secondNumber = Number(prompt("Hi! Kindly enter the second number:"));
}

let thirdNumber = Number(prompt("Hi! Kindly enter the third number:"));

while (!(isNumber(thirdNumber))) {
    thirdNumber = Number(prompt("Hi! Kindly enter the third number:"));
}

const averageNumber = (firstNumber + secondNumber + thirdNumber) / 3

alert (`The average number from ${firstNumber}, ${secondNumber}, ${thirdNumber} is ${averageNumber}`);


