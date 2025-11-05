const quotes = [
  "Dream big. Start small. Act now.",
  "Code is like humor. When you have to explain it, it’s bad.",
  "Don’t watch the clock; do what it does. Keep going.",
  "First, solve the problem. Then, write the code.",
  "Experience is the name everyone gives to their mistakes.",
];

const btn = document.querySelector(".btn");
const here = document.querySelector(".here");

btn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  here.innerText = quotes[randomIndex];
});
