
// conditional
// let password ;

// if (password === 8) {
//   console.log("Welcome");

// } else if (password <= 8) {
//   console.log("password is too short ");

// } else if (password >= 8) {
//   console.log("Too long password ");
//   console.log("Password should be 8 characters");

// } else {
//   console.log("please provide password ");
// }


// switch

let fruit ="grapes";

switch (fruit){
 
  case "banana":
    console.log("banana is good !");
   break;
  case "orange":
    console.log("i am not a fan oof orange");
    break;
  case "apple":
    console.log("how you like them apple");
    break;
    default:
      console.log("i have never heard of that fruit.");
      break;
}

// loop

      // for (let i = 0; i <= 10; i++) {
      //    console.log("holla!! rishuuu,",i);
      //  }

      //    let i = 10;

      //       while (i <= 100) {
      //     console.log("holla!" ,i);
      //      i++;
      //    }

      //   let i=1;

      //    do {
      //   console.log("hello rishabh it's me ", i);
      //   i++;         

      //   } while (i <= 5); 


      
 
      // 1. Logical AND (&&)

     // → TRUE if both the operands/boolean values are true, else.evaluates to FALSE

     const a = true;

     const b = false;

      const c = 4;

// console.log(c > 2 && c < 2);

// 2. Logical OR (||)

  //  -> TRUE if either of the operands/boolean values is true.
  // evaluates to false if both are false.

         console.log(a || b);

         console.log(b || b);

         console.log(c > 2 || c < 2);


//  3 -> logical NOT(!)
//  -> true if the operands is false and vice-versa 

console.log(!a);
console.log(!b);
  
// Array
const favnumber = [1 , 2, 3]
console.log(favnumber); 


// Object

// const person = {

//     firstname : "rishabh",
//   10 : "ten",
// };
// console.log(person["10"]);

const car = {
  type : "travelcar",
  model : "standerd",
  color : "black",

};
car.wheels = "big",

console.log(typeof car);
console.log( car.type ="toyota");
console.log(car);

// Normal function with return key word
function yess() {
  console.log("yooooo");
}
yess();

function myFunction(p1,p2) {
    return p1 * p2 ;

}

let x = myFunction(4,3)
console.log(x);

// Function Declaration 
function sayhello (username) {
  console.log(`Hello ${username}`);
}

sayhello("HuXn");

// Function Expression 
const greetings =function (user) {
  console.log(`Hello ${user}`);

}

greetings("jhon")

// Callback function

function showCallFunc(fn){
  const hold = 10;
 fn(hold);
}

showCallFunc(function (value){
  console.log(value);
})
