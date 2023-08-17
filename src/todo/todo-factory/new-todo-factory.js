import {emit} from "../../pub-sub";

export {NewTodoFactory}

class NewTodoFactory {
  build() {
    const inputElement = document.createElement("input");
    inputElement.id = "new-todo-input";
    inputElement.placeholder = "New Todo"
    inputElement.addEventListener("keyup", this.#createNewTodo);
    return inputElement;
  }

  #createNewTodo(event) {
    const keyPressed = event.key;
    const todoName = event.target.value;
    if (keyPressed === "Enter") {
      emit("newTodo", todoName);
    }
  }
}