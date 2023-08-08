import {emit} from "./pub-sub";

export {todoFactory}

class todoFactory {
  build(todoObject) {
    const todoContainer = this.#generateContainer();
    const todoName = this.#generateTodoName(todoObject.name);
    this.todoName = todoObject.name;
    const todoDate = this.#generateTodoName("No Date");

    todoContainer.append(todoName);
    todoContainer.append(todoDate);
    return todoContainer;
  }

  buildBoilerPlate() {
    return this.build({name:""})
  }

  #generateTodoName(name) {
    const todoNameContainer = document.createElement("p");
    todoNameContainer.innerText = name;
    todoNameContainer.addEventListener("click", this.#changeToInput.bind(this));
    return todoNameContainer;
  }

  #changeToInput(event) {
    const todoName = this.todoName;
    console.log(todoName)
    const todoInput = this.#generateTodoInput(todoName);
    event.target.parentElement.replaceChild(todoInput, event.target);
  }

  #generateContainer() {
    const container = document.createElement("div");
    container.classList.add("todo-element");
    return container;
  }

  setProjectName(projectName) {
    this.projectName = projectName;
  }

  #generateTodoInput(inputContent) {
    const todoInput = document.createElement("input");
    todoInput.value = inputContent;
    todoInput.classList.add("todo-input");
    return todoInput;
  }
}