// // foreach() method

// // const words = ["hello", "bird", "table", "football", "pipe", "code"];
// // const capWords = words.forEach((word, index, arr) => {
// //   arr[index] = word[0].toUpperCase() + word.substring(1);
// // });
// // console.log(words);

// const num = [2, 4, 6, 8, 10];

// const doublenum = num.forEach((num) => {
//   console.log(num * 2);
// });

// // map ()
// let nm = [1, 2, 4, 5];
// let mulnm = nm.map((nm) => nm * 10);
// console.log(mulnm);

// // callback
// const numbers = [12, 23, 55];

// function myfun(num) {
//   return num * 10;
// }

// const newArr = numbers.map(myfun);
// console.log(newArr);

// // filter
// // const songs = [
// //   { name: "nadss", duration: 4.34 },
// //   { name: "ndfadss", duration: 3.34 },
// //   { name: "naedss", duration: 1.34 },
// //   { name: "nadess", duration: 2.34 },
// //   { name: "nadswes", duration: 6.34 },
// // ];
// // console.log(songs.filter((song) => song.duration > 3));

// const ages = [32, 33, 16, 40];
// const adults = ages.filter((age) => age > 18);
// console.log(adults);

// const words = [
//   "spray",
//   "limit",
//   "elite",
//   "exuberant",
//   "destruction",
//   "present",
// ];
// // const wor = words.filter((word) => word.length > 6);
// // console.log(wor);
// function dis(word) {
//   return word.length > 4;
// }
// const wor = words.filter(dis);
// console.log(wor);

// // find()

// const posts = [
//   { id: 1, content: "good post" },
//   { id: 2, content: "funny post" },
//   { id: 3, content: "sad post" },
// ];

// const postRes = posts.find((post) => post.content === "good post");
// console.log(postRes);

// const ages = [3, 10, 18, 20];
// // const adult = ages.find((age) => age > 18);
// // console.log(adult);
// function adult(age) {
//   return age > 18;
// }
// const res = ages.find(adult);
// console.log(res);

let products = [
  { name: "Checkers", category: "Toys" },
  { name: "Harry Potter", category: "Books" },
  { name: "iPhone", category: "Electronics" },
  { name: "Learn PHP", category: "Books" },
];
//  do all products have a category of books?
const allProductsBooks = products.every(
  (product) => product.category === "Books"
);
console.log(allProductsBooks);
//  do any products have a category of book?
const someProductsBooks = products.some(
  (product) => product.category === "Books"
);
console.log(someProductsBooks);

// Map(). it's a advance version of object key and value we need to need to give

const maps = new Map();

const key1 = "huxn";
const key2 = {};
const key3 = function () {};

maps.set(key1, "value of keyone");
maps.set(key2, "value of keysecond");
maps.set(key3, "value of keythree");

// console.log(maps.keys());
//console.log(maps.get(key1));
// console.log(maps.values());
// console.log(maps.delete(key2));
// console.log(maps.size());
// console.log(maps);

for (let [key, value] of maps) {
  console.log(`${key} --- ${value}`);
}

for (let key of maps.keys()) {
  console.log(key);
}

for (let value of maps.values()) {
  console.log(value);
}

// Set is a built-in data structure introduced in (ES6) that represents a
// collection of unique values. Unlike arrays, Set allows you to store only
// unique values, which means duplicate values are automatically removed.
// Each value can occur only once within a Set.

// Set objects are useful when you need to store a list of unique
// elements and quickly check for the existence of a specific value.

// const mySet = new set();

// mySet.add("apple");
// mySet.add("banana");
// mySet.add("orange");
// mySet.add("apple"); // Duplicate value; will be ignored

// console.log(mySet); // Set(3) { 'apple', 'banana', 'orange' }

// console.log(mySet.has("banana")); // true
// console.log(mySet.has("grape")); // false

// mySet.delete("orange");
// console.log(mySet); // Set(2) { 'apple', 'banana' }

// mySet.clear();
// console.log(mySet); // Set(0) {}
// -------------------------------------------------

const set = new Set();

set.add("apple");
set.add("string");
set.add({ name: "huxn" });
set.add(10);

console.log(set.size);
console.log(set.keys());
console.log(set.has({ name: "huxn" }));

// set.delete(10);
// console.log(set);

// Iterating over sets.
// for (let item of set) {
//   console.log(item);
// }

// Symbol is a unique and immutable primitive data type introduced in
// ECMAScript 6 (ES6)
const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2); // false
