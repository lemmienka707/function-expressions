// Kaylee Lemmien
// 06 May 2024
// JS Function Expression Example

// Assign function add to a variable named sum
const calcSum = function(num1, num2){
    return num1 + num2;
}

// Find the sum by calling the function
// Result of calculation is returned from the function and
// stored in a new variable named answer
const answer = calcSum(12, 5);
// Option 1
// Displaying the result of the calculation in the browser console
console.log(`(Option 1): The sum is: ${answer}`);
// Option 2
// Calling the function calcSum from within the template string
console.log(`(Option 2): The sum is: ${calcSum(20, 4)}`);
// Calling the function sum from within the template string
const firstNum = 20;
const secondNum = 4;
console.log(`(Option 3): The sum is: ${calcSum(firstNum, secondNum)}`);


const welcomeUser = function(fName) {
    return `Welcome to Career Tech, ${fName}!`;
}

const firstname = 'Joshua';
alert(welcomeUser(firstname));

const showBiography = function(fName, lName, userAge) {
    return `Hello! My name is ${fName} ${lName} and I am ${userAge} years old.`;
}

const firstName = 'Tania';
const lastName = 'Rascia';
const age = 24;
console.log(showBiography(firstName, lastName, age));
