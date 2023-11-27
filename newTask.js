const titleRef = document.getElementsByClassName("input1");
const title = document.getElementById("title");
const DesTitleRef = document.getElementsByClassName("input2");
const statusRef = document.getElementById("status");
const priority = document.getElementById("priority");
const addTask = document.getElementById("closeButton");
// shineer hiigdeh window iin ajil
const card = document.createElement("div");

const start = document.createElement("div");
const middle = document.createElement("div");
const last = document.createElement("div");

const titleEl = document.createElement("p");
const descriptionEl = document.createElement("p");

const done = document.createElement("p");
done.innerHTML = `<i class="fas fa-check" aria-hidden="true"></i>`;

const deleteBtn = document.createElement("p");
deleteBtn.innerHTML = `<i class="fa-solid fa-xmark">…</i>`;

const editBtn = document.createElement("p");
editBtn.innerHTML = `<i class="fa-solid fa-pen-to-square">…</i>`;

start.appendChild(done);
middle.appendChild(titleEl);
middle.appendChild(descriptionEl);
last.appendChild(deleteBtn);
last.appendChild(editBtn);

card.append(start, middle, last);

titleEl === titleRef.value;
descriptionEl === DesTitleRef.value;

const btn = document.getElementById("closeButton");

function addTusk() {
  const mainWindow = document.getElementById("to-do");
  const paragraph = document.createElement("p");
  paragraph.textContent = title.value;
  mainWindow.appendChild(paragraph);
  title.value = "";
  //   mainWindow.appendChild(card);
  //   console.log(title.value);
}
btn.addEventListener("click", addTusk);
