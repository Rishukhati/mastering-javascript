// Q1-Create two variables firstName = "Rishabh" and age = 21, then print My name is Rishabh and I am 21 years old.
let firstName = "Rishabh";
let age =  21;

console.log(`My name is ${firstName} and I am ${age} years old`);
// what i learn that when we want to print variable ${} then we have use backrick`` at first i was using normal coma

// Q2-Swap the values of two variables a = 5 and b = 10 using a third variable.

let a = 5;
let b = 10;
let temp = a;
a = b;
b = temp;
console.log(a, b); // 10 5
 
// i don't know about it 

// Q3-Find the sum, difference, and product of num1 = 8 and num2 = 3.

let num1 = 8
let num2 = 3

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);

// Q4-Round 5.6789 to two decimal places.

let n = 5.6789;
console.log(n.toFixed(2)); // "5.68"

// do't know learned it now 

// Q5-Check if 10 > 5 and print the result.

console.log(10>5);

// q6-Create a variable isAdult that is true if age >= 18, otherwise false.

let e = 17;
let isAdult = e >= 18;
console.log(isAdult); // false

// Q7- Compare two numbers and print "a is greater" if a > b, else "b is greater".

let z = 10, y = 7;
if (z > y) console.log("z is greater");
else console.log("y is greater");

// Q8- Write a switch statement for day = 1 that prints "Monday" for 1, "Tuesday" for 2, otherwise "Other day".

let day = 1;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Other day");
}

for (let i= 0;  i<=5; i++){
    console.log(i);
}



