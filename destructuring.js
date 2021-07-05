//1.
// This code is setting the variable name of randomcar to tesla and then it is setting the variable of otherrandomcar
// to mercedes. The comma in the second constant means the second variable in the array.
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

//2.
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output-- The console.log(name) is an undefined variable and will give an error, but if you take that out
// the code will console log elon.
//console.log(name);
console.log(otherName);

//3.
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output -- The first console log will print out the password but the second will be undefined because password
// is not a variable that is defined in person.
console.log(password);
console.log(hashedPassword);

//4.
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output -- The first console log will be false because the variable labled first is the 2 because of the comma at the beginning
// the second variable is 5.
// Counting the commas for the third variable makes it the last number in the array which is 2 and that does equal the first
// variable
console.log(first == second);
console.log(first == third);

//5.
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output -- The first console log just wants the value of the key variable which is value. The second console log
// wants the value of secondkey which is an array of numbers. The next console log wants the number in the 0 spot of the
// array which is the number 1. The last console log defines the variable willthiswork as the second number in the array
// and console logs it.
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);