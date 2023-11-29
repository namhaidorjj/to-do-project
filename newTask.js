//add tusk hiih ued garch ireh tsonh-----------------------------------------------------------

const ToDoWindow = document.getElementById("to-do");
const inProgressWindow = document.getElementById("inProgress");
const stuckWindow = document.getElementById("stuck");
const doneWindow = document.getElementById("done");
ToDoWindow.classList.add("to-do");
function addedtusk() {
  ToDoWindow.style.display = "flex";

  const bodybackground = document.getElementById("body");
  bodybackground.classList.add("rgba");
}
for (let i = 0; i < addCardButtons.length; i++) {
  addCardButtons[i].addEventListener("click", addedtusk);
}

//shineer hiiihdej bui window-----------------------------------------------------------

const titleRef = document.getElementById("title");
const descriptionRef = document.getElementById("description");
const statusRef = document.getElementById("status");
const priority = document.getElementById("priority");

//shine render ----------------------------------------------------------------------------

let state = {
  tasks: [],
};

function addTask() {
  const newTask = {
    title: titleRef.value,
    description: descriptionRef.value,
    status: statusRef.value,
    priority: priority.value,
  };

  state.tasks.push(newTask);
  render();
}

function render() {
  ToDoWindow.innerHTML = "";
  inProgressWindow.innerHTML = "";
  stuckWindow.innerHTML = "";
  doneWindow.innerHTML = "";
  for (let i = 0; i < state.tasks.length; i++) {
    // const ToDoWindow = document.getElementById(state.tasks[i].status);
    const card = document.createElement("div");
    card.id = "cardHolder";

    const start = document.createElement("div");
    start.classList.add("start");
    const middle = document.createElement("div");
    middle.classList.add("middle");
    const last = document.createElement("div");
    last.classList.add("lastCSS");

    // Start

    const done = document.createElement("div");
    done.innerHTML = `<i class="fas fa-check" aria-hidden="true"></i>`;
    done.classList.add("done");
    start.appendChild(done);

    // Middle

    const paragraph = document.createElement("h4");
    const titlle = document.createElement("p");
    const priorityref = document.createElement("option");

    priorityref.classList.add("optionCss");

    priorityref.textContent = state.tasks[i].priority;
    paragraph.textContent = state.tasks[i].title;
    titlle.textContent = state.tasks[i].description;

    middle.appendChild(paragraph);
    middle.appendChild(titlle);
    middle.appendChild(priorityref);

    // End

    const deleteBtn = document.createElement("div");
    deleteBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    deleteBtn.classList.add("deleteBtn");
    last.appendChild(deleteBtn);

    const editBtn = document.createElement("div");
    editBtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
    editBtn.classList.add("editBtn");
    last.appendChild(editBtn);

    card.appendChild(start);
    card.appendChild(middle);
    card.appendChild(last);

    if (state.tasks[i].status === "To Do") {
      ToDoWindow.appendChild(card);
    }
    if (state.tasks[i].status === "inprogress") {
      inProgressWindow.appendChild(card);
    }
    if (state.tasks[i].status === "stuck") {
      stuckWindow.appendChild(card);
    }
    if (state.tasks[i].status === "done") {
      doneWindow.appendChild(card);
    }

    titleRef.value = "";
    descriptionRef.value = "";
  }

  //Priority erembleh
  const low = document.createElement("div");

  const medium = document.createElement("div");

  const high = document.createElement("div");
}
// shineer hiigdeh window iin ajil-----------------------------------------------------------

// shine tsonh garj ireh nuhtsul -----------------------------------------------------------

const btn = document.getElementById("closeButton");

btn.addEventListener("click", addTask);

render();
// hamggin suuld hiij baisan ajil
//
