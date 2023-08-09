import {emit} from "../pub-sub";

export {todoFactory}

class todoFactory {
  build(todoObject) {
    const todoContainer = this.#generateContainer();
    const todoName = this.#generateTodoName(todoObject.name);
    this.todoName = todoObject.name;
    const todoDate = this.#generateTodoDate();

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
    todoNameContainer.classList.add("todo-name");
    todoNameContainer.addEventListener("click", this.#changeToInput.bind(this));
    return todoNameContainer;
  }

  #generateTodoDate() {
    const todoNameContainer = document.createElement("p");
    todoNameContainer.innerText = "No Date";
    return todoNameContainer;
  }

  #changeToInput(event) {
    const todoName = event.target.innerText;
    const todoInput = this.#generateTodoInput(todoName);
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