import {emit} from "../../others/pub-sub";
import {TodoDateFactory} from "./todo-date-factory";

export {todoFactory}

class todoFactory {

  constructor() {
    this.todoDateFactory = new TodoDateFactory();
  }

  build(todoObject) {
    const todoContainer = this.#generateContainer();
    const todoName = this.#generateTodoName(todoObject.name);
    const todoDate = this.todoDateFactory.generateTodoDate(todoObject.date);

    todoContainer.append(todoName);
    todoContainer.append(todoDate);
    return todoContainer;
  }

  #generateTodoName(name) {
    const todoNameContainer = document.createElement("p");
    todoNameContainer.innerText = name;
    todoNameContainer.classList.add("todo-name");
    todoNameContainer.addEventListener("click", this.#changeToInput.bind(this));
    return todoNameContainer;
  }

  #changeToInput(event) {
    const todoName = event.target.innerText;
    const todoInput = this.#generateTodoInput(todoName);
    todoInput.placeholder = "New Todo Name"
    event.target.parentElement.replaceChild(todoInput, event.target);
    todoInput.focus();
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
    todoInput.addEventListener(
      "keydown",
      this.#createNewTodo.bind({todoObject:this, inputValue:inputContent})
    );
    return todoInput;
  }

  #createNewTodo(event) {
    const keyPressed = event.key;
    if (keyPressed === "Enter") {
      const todoName = event.target.value;
      emit(
        "todoChange",
        {project: this.todoObject.projectName, oldTodoName:this.inputValue, newTodoName:todoName}
      )
    }
  }
}