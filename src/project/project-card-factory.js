export {ProjectCardFactory}

class ProjectCardFactory {
  build(project) {
    const container = document.createElement("div");
    const projectNameElement = this.#createProjectTitle(project.name);
    const todosElements = this.#createTodos(project.todoList);

    container.classList.add("project-card")
    container.append(projectNameElement);
    container.append(todosElements);
    return container;
  }

  #createProjectTitle(project) {
    const titleObject = document.createElement("h4");
    titleObject.innerText = project;
    return titleObject;
  }

  #createTodos(todoList) {
    const container = document.createElement("ul");
    container.classList.add("todo-list-element");
    todoList.forEach(todo => {
      const todoElement = this.#createTodo(todo.name)
      container.append(todoElement);
    })
    return container;
  }

  #createTodo(todoName) {
    const todoElement = document.createElement("li");
    todoElement.innerText = todoName;
    return todoElement;
  }
}