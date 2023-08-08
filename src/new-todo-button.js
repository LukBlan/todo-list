export {newTodoButton}

const newTodoButton = generateTodoButton();

function generateTodoButton() {
  const newTodoButton = document.createElement("button");
  newTodoButton.innerText = "＋";
  newTodoButton.classList.add("new-todo-button");
  return newTodoButton;
}