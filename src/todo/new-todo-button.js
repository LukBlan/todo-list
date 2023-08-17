import {getService} from "../service-locator";

export {newTodoButton}

const newTodoButton = generateNewTodoButton();

function generateNewTodoButton() {
  const newTodoButton = document.createElement("button");
  newTodoButton.innerText = "＋";
  newTodoButton.classList.add("new-todo-button");
  newTodoButton.addEventListener("mouseup", changeButton);
  return newTodoButton;
}

function generateTodoBoilerPlate() {
  const todoFactory = getService("newTodoFactory");
  return todoFactory.newTodoInput();
}

function changeButton(event) {
  const parentElement = event.target.parentElement;
  const newTodoInput = generateTodoBoilerPlate();
  parentElement.replaceChild(newTodoInput, newTodoButton);
}