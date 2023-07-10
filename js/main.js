//call elements (class or id) html
const inputField = document.querySelector(".input-field textarea"),
  todoLists = document.querySelector(".todolists"),
  pendingNum = document.querySelector(".pending-num"),
  clearButton = document.querySelector(".clear-button");

//call this function, while adding, deleting and check uncheck lists
function allTasks() {
  let tasks = document.querySelectorAll(".pending");
  //if value tasks is 0 pending num will nothing display, and if have pending tasks num value will display
  pendingNum.textContent = tasks.length === 0 ? "no" : tasks.length;
  let allLists = document.querySelectorAll(".list");
  if (allLists.length > 0) {
    todoLists.style.marginTop = "20px";
    clearButton.style.PointerEvents = "auto";
    return;
  }
  todoLists.style.marginTop = "0";
  clearButton.style.PointerEvents = "none";
}

//add task while input value in textarea and press enter
inputField.addEventListener("keyup", (e) => {
  let inputVal = inputField.value.trim(); //trim function is remove space of front and back of the inputed value

  //check if enter button is clicked  and inputed value length is greater than 0
  if (e.key === "Enter" && inputVal.length > 0) {
    let listTag = `<li class="list pending" onclick="handleStatus(this)">
    <input type="checkbox"/>
    <span class="task">${inputVal}</span>
    <i class="bx bxs-trash" onclick="deleteTask(this)"></i>
    </li>`;
    todoLists.insertAdjacentHTML("beforeend", listTag); //insert list tag with span and icon inside div
    inputField.value = ""; //remove value after input
    allTasks();
  }
});

//check and unchecked status todolist
function handleStatus(e) {
  const checkbox = e.querySelector("input");
  checkbox.checked = checkbox.checked ? false : true;
  e.classList.toggle("pending");
  allTasks();
}

//delete tasks icon
function deleteTask(e) {
  e.parentElement.remove();
  allTasks();
}

//clear all list
clearButton.addEventListener("click", () => {
  todoLists.innerHTML = "";
  allTasks();
});
