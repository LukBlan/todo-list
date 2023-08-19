import {emit, subscribe} from "../../others/pub-sub";
import {getService} from "../../others/service-locator";

export {TodoDateFactory}

class TodoDateFactory {
  constructor() {
    this.dateFormatter = getService("dateManager");
  }

  generateTodoDate(date) {
    const todoDateContainer = document.createElement("p");
    todoDateContainer.innerText = this.dateFormatter.giveFormat(date, "d-m-y");
    todoDateContainer.addEventListener("click", this.#changeToInput(this));
    return todoDateContainer;
  }

  #changeToInput(classObject) {
    return function () {
      const date = this.innerText;
      const formattedDate = classObject.dateFormatter.giveFormat(date, "y-m-d");
      console.log(formattedDate);
      const todoInput = classObject.#generateTodoInput(formattedDate);
      this.parentElement.replaceChild(todoInput, this);
      todoInput.focus();
    }
  }

  #generateTodoInput(date) {
    const inputElement = document.createElement("input");
    inputElement.classList.add("date-input");
    inputElement.addEventListener("focusout", this.#updateTodo)
    inputElement.type = "date";
    inputElement.value = date;
    return inputElement;
  }

  #updateTodo(event) {
    const projectElement = event.target.parentElement.firstChild
    const todoName = projectElement.innerText || projectElement.value;
    const todoDate = event.target.value.split("-").reverse().join("-");
    const projectName = getService("getProjectName")();
    console.log(projectName);
    const updateTodoObject = {project:projectName, todo:todoName, date:todoDate};
    emit("updateDate", updateTodoObject);
  }
}