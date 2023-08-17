import {getService} from "../service-locator";

export {NewTodoButton}

class NewTodoButton {
  build(projectName) {
    this.newTodoButton = this.#getNewTodoButton(projectName);
  }

  #getNewTodoButton(projectName) {
    const newTodoButton = document.createElement("button");
    newTodoButton.innerText = "＋";
    newTodoButton.classList.add("new-todo-button");
    newTodoButton.addEventListener("mouseup", this.#changeButton(projectName, this));
    return newTodoButton;
  }

  #changeButton(projectName, todoObject) {
    return function (event) {
      const parentElement = event.target.parentElement;
      const newTodoInput = todoObject.#generateTodoBoilerPlate(projectName);
      parentElement.replaceChild(newTodoInput, this.newTodoButton);
    }
  }

  #generateTodoBoilerPlate(projectName) {
    const todoFactory = getService("newTodoFactory");
    return todoFactory.newTodoInput();
  }
}