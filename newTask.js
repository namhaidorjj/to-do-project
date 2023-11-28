//add tusk hiih ued garch ireh tsonh-----------------------------------------------------------

const ToDoWindow = document.getElementById("to-do");
ToDoWindow.classList.add("to-do");
function addedtusk() {
  ToDoWindow.style.display = "flex";
}
for (let i = 0; i < addCardButtons.length; i++) {
  addCardButtons[i].addEventListener("click", addedtusk);
}

//shineer hiiihdej bui window-----------------------------------------------------------

const titleRef = document.getElementsByClassName("input1");
const title = document.getElementById("title");
const DesTitleRef = document.getElementsByClassName("input2");
const descrip = document.getElementById("descrition");
const statusRef = document.getElementById("status");
const priority = document.getElementById("priority");
const addTask = document.getElementById("closeButton");

// shineer hiigdeh window iin ajil-----------------------------------------------------------

const card = document.getElementById("cardHolder");
console.log(card);

const start = document.createElement("div");
start.classList.add("start");
const middle = document.createElement("div");
middle.classList.add("middle");
const last = document.createElement("div");
last.classList.add("lastCSS");

card.appendChild(start);
card.appendChild(middle);
card.appendChild(last);
console.log(card);
ToDoWindow.appendChild(card);

const titleEl = document.createElement("p");
const descriptionEl = document.createElement("p");

const done = document.createElement("div");
done.innerHTML = `<i class="fas fa-check" aria-hidden="true"></i>`;
done.classList.add("done");
start.appendChild(done);

const deleteBtn = document.createElement("div");
deleteBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
deleteBtn.classList.add("deleteBtn");
last.appendChild(deleteBtn);

const editBtn = document.createElement("div");
editBtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
editBtn.classList.add("editBtn");
last.appendChild(editBtn);

// shine tsonh garj ireh nuhtsul -----------------------------------------------------------

titleEl === titleRef.value;
descriptionEl === DesTitleRef.value;

const btn = document.getElementById("closeButton");

function addTusk() {
  const mainWindow = document.getElementById("to-do");
  const paragraph = document.createElement("h4");
  const titlle = document.createElement("p");
  const priorityref = document.createElement("option");
  priorityref.textContent = priority.value;
  paragraph.textContent = title.value;
  titlle.textContent = descrip.value;
  middle.appendChild(paragraph);
  middle.appendChild(titlle);
  middle.appendChild(priorityref);
  title.value = "";
  descrip.value = "";
}
btn.addEventListener("click", addTusk);
