//add card deer darah ued garch ireh tsonh addTusk darhad butsad alga bolno-----------------------------------------------------------

const addTaskButton = document.getElementById("add-taskk");
const addCardButtons = document.getElementsByClassName("add-card");
function unblock() {
  addTaskButton.style.display = "flex";
}
for (let i = 0; i < addCardButtons.length; i++) {
  addCardButtons[i].addEventListener("click", unblock);
}
const close = document.getElementById("closeButton");
function closed() {
  addTaskButton.style.display = "none";
}
close.addEventListener("click", closed);
//
