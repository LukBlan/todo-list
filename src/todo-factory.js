export {todoFactory}

class todoFactory {
  build(todoObject) {
  const todoContainer = this.#generateContainer();
  const todoName = this.#generateTodoName(todoObject.name);
  const todoDate = this.#generateTodoName("No Date");

  todoContainer.append(todoName);
  todoContainer.append(todoDate);
  return todoContainer;
  }

  #generateTodoName(name) {
    const todoNameContainer = document.createElement("p");
    todoNameContainer.innerText = name;
    return todoNameContainer;
  }

  #generateContainer() {
    const container = document.createElement("div");
    container.classList.add("todo-element");
    return container;
  }
}