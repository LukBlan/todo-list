import {emit} from "../../others/pub-sub";

export {NewTodoFactory}

class NewTodoFactory {
  build(projectName) {
    const inputElement = document.createElement("input");
    inputElement.id = "new-todo-input";
    inputElement.placeholder = "New Todo"
    inputElement.addEventListener("keyup", this.#createNewTodo(projectName));
    return inputElement;
  }

  #createNewTodo(projectName) {
    return function (event) {
      const keyPressed = event.key;
      const todoName = event.target.value;
      if (keyPressed === "Enter") {
        emit("newTodo", {project: projectName, todo: todoName});
      }
    }
  }
}