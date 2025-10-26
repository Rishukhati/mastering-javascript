// // template string `` backticks more flexible

// const { forwardRef } = require("react");

// let firstName = 'Rishabh';
// let lastName = "singh";

// // console.log(`${firstName} ${lastName}`);

// // console.log(`${["the quick" , "brown fox", "jumps over", "the lazy dog"]}`);

// // ES6

// //  ES5 -> ES6
// function getPersionES5(name, age, height) {
//     return {
//         name: name,
//         age : age,
//         height : height,

//     };
// }

// // console.log(getPersionES5("HuXn" , 13, 200));

// // now ES6

// const  getPersionES6 = (name, age, height) => ( {
//          name,
//          age,
//          height,

   
// });
// const res =(getPersionES6("HuXn" , 13, 200));
// console.log(res);
// console.log(getPersionES5("HuXn" , 13, 200));

// Default Parameters

// function countTo5(count) {
//     if (count === true) {
//         for (let i = 1; i<=5 ; i++){
//             console.log(`count: ${i}`);
//         }
//     }
// }
// countTo5(true);

// Spread Operator

const num = [1 , 2 ,3 , 4];
const favThing = ['travel' , 'bike' ,'eating','exploring'];

const sumUp = [...num , ...favThing];
console.log(sumUp);

const user = {
    name : 'rishu',
    age : 20,
};
const cloneUser = {...user};
console.log(cloneUser);

function value(...param) {
    console.log(param);

}
value (1 , 2 ,3 ,4,5);

//  Destructuring
// inArray
const colors = ['red' , 'green' ,'blue' , 'yellow'];

const [color1,color2,color3] = colors;
console.log(color1 , color2,color3);  

// inFunction array
function f() {
    return[1,2];
}
let a,b;
[a, b] = f();
console.log(a,b);

// inObject
const person ={
    name : 'rishabh',
    age: 30,
    gender : 'male',
    country :'New york',

};
const {name: naam, age , country} = person;
console.log(naam);
console.log(`age : ${age}`); //when we want to write like this we have to use backtick
console.log("country :" , country);

// infuntion

let option = {
    title : 'My menu',
    items : ["item1", "item2"]
};

function showMenu({title = untitled , items}) {
    console.log(`${title}`);
    console.log(`${items}`);
}

showMenu(option);

// nestedDestructuring

 const song = [
    {name : 'r'},
    {name : 'i'},
    {name: 's'},
    {name: 'h'}
]
const [, ,{name}] = song;
console.log(name);

// #44: Ternary Operator 
// if and else alternative not use for if and else if
let pass = 8;

function passwordChecker(ps) {
    // if (ps === 8) {
    // return 'strong password';    
    // } else {
    //     return 'pass should be 8 character';
    // }
    return ps === 8 ? 'strong password' : 'pass should be 8 character';
}
const res = passwordChecker(pass);
console.log(res);

const agee = 25;
// ? - then  : - else
const isAdult = agee>=18 ? 'Adult' : 'Not an Adult';
console.log(isAdult);

// ex -

let personMoney = true;
let haveMoney =
    personMoney === true ? 'buy products' : 'they bring money';
    console.log(haveMoney);

// #45 for in loop
const object = {a:1 , b:2 ,c:3};
for (let number in object) {
        // console.log(`${number}: ${object[number]}`);
        console.log(number , object[number]);
}
