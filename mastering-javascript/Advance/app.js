// foreach() method

// const words = ["hello", "bird", "table", "football", "pipe", "code"];
// const capWords = words.forEach((word, index, arr) => {
//   arr[index] = word[0].toUpperCase() + word.substring(1);
// });
// console.log(words);

const num = [2, 4, 6, 8, 10];

const doublenum = num.forEach((num) => {
  console.log(num * 2);
});

// map ()
let nm = [1, 2, 4, 5];
let mulnm = nm.map((nm) => nm * 10);
console.log(mulnm);

// callback
const numbers = [12, 23, 55];

function myfun(num) {
  return num * 10;
}

const newArr = numbers.map(myfun);
console.log(newArr);

// filter
// const songs = [
//   { name: "nadss", duration: 4.34 },
//   { name: "ndfadss", duration: 3.34 },
//   { name: "naedss", duration: 1.34 },
//   { name: "nadess", duration: 2.34 },
//   { name: "nadswes", duration: 6.34 },
// ];
// console.log(songs.filter((song) => song.duration > 3));

const ages = [32, 33, 16, 40];
const adults = ages.filter((age) => age > 18);
console.log(adults);

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
// const wor = words.filter((word) => word.length > 6);
// console.log(wor);
function dis(word) {
  return word.length > 4;
}
const wor = words.filter(dis);
console.log(wor);

// find()

const posts = [
  { id: 1, content: "good post" },
  { id: 2, content: "funny post" },
  { id: 3, content: "sad post" },
];

const postRes = posts.find((post) => post.content === "good post");
console.log(postRes);
