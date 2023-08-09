export {Project}

class Project {
  constructor(name) {
    this.name = name;
    this.todoList = []
  }

  checkName(projectName) {
    return this.name === projectName;
  }

  updateTodo(todoObject) {
    const todo = this.todoList.find(todoElement => todoElement.name === todoObject.oldTodoName);
    if (todo === undefined) {
      this.createNewTodo(todoObject.newTodoName);
    } else {
      this.updateExitedTodo(todo, todoObject)
    }
  }

  createNewTodo(todoName) {
    this.todoList.push({name: todoName, complete:false})
  }

  updateExitedTodo(todo, todoObject) {
    todo.name = todoObject.newTodoName;
  }
}