const addTuskButton = document.querySelectorAll(".add-task")
console.log(addTuskButton)
const addCard = document.querySelectorAll(".add-card")
console.log(addCard)
function unblock(){
addTuskButton.style.display = (block)
}
addCard.addEventListner("click", unblock)