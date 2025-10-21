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

function countTo5(count) {
    if (count === true) {
        for (let i = 1; i<=5 ; i++){
            console.log(`count: ${i}`);
        }
    }
}
countTo5(true);
