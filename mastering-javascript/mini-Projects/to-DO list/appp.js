const input = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("#taskList");

addBtn.addEventListener("click", () => {
  const taskText = input.value.trim();

  if (taskText === "") return alert("Please enter a task!");

  // create li element
  const li = document.createElement("li");
  li.textContent = taskText;

  // add delete button
  const deleteBtn = document.createElement("span");
  deleteBtn.textContent = "✖";
  deleteBtn.classList.add("delete-btn");
  li.appendChild(deleteBtn);

  // append li to ul
  list.appendChild(li);
  input.value = "";

  // toggle complete on click
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // delete on delete button click
  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // stop li click event
    li.remove();
  });
});
