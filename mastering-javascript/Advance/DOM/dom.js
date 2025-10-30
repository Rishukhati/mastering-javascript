// Document Object Model
// ************ DOM SELECTORS ************
// 1. getElementsByTagName

// console.log(document.getElementsByTagName("h1"));
// console.log(document.getElementsByTagName("h1").length);

// 2. getElementById

// console.log(document.getElementById("main"));

// 3. getElementsByClassName

// console.log(document.getElementsByClassName("cls"));

// 4. querySelector
// tagname -- normal write ""
// id -- #nameof id
// class -- .nameof class

console.log(document.querySelector(".cls"));

// 5. querySelectorAll

console.log(document.querySelectorAll("li"));
console.log(document.querySelectorAll("li").length);

// storing data in variables

const apple = document.querySelector("h1");
console.log(apple);
