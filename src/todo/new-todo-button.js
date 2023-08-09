import {getService} from "../service-locator";

export {newTodoButton}

const newTodoButton = generateTodoButton();

function generateTodoButton() {
  const newTodoButton = document.createElement("button");
  newTodoButton.innerText = "＋";
  newTodoButton.classList.add("new-todo-button");
  newTodoButton.addEventListener("mouseup", changeButton);
  return newTodoButton;
}

function generateTodoBoilerPlate() {
  const todoFactory = getService("todoFactory");
  return todoFactory.buildBoilerPlate();
}

function changeButton(event) {
  const parentElement = event.target.parentElement;
  const todoBoilerPlate = generateTodoBoilerPlate();
  parentElement.replaceChild(todoBoilerPlate, event.target);
}