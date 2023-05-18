//Ask the user for a four-digit number 
let fourDigitNumber = prompt("Please provide a four-digit number: ");

//Check if the number is a four-digit number
if (fourDigitNumber.length !== 4) 
{
    alert("The number you provided is not a four-digit number.");
}

//If the number is a four-digit number, add each digit to an array


//Create an empty array
const digit = [];

for(let i = 0; i < fourDigitNumber.length; i++)
{
    digit.push(parseInt(fourDigitNumber[i]));
}

//Print the array in the console
console.log(digit);

//Create a variable to store the sum of all the digits in the array
let sumOfArrayElements = 0;

//Add each digit in the array to the variable
for(let i = 0; i < digit.length; i++)
{
    sumOfArrayElements += digit[i];
}

//Print the sum of all the digits in the array
console.log(sumOfArrayElements);