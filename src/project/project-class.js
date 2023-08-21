import {getService} from "../others/service-locator";

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
    const todo = this.getTodo(todoObject.oldTodoName);
    if (todo === undefined) {
      this.createNewTodo(todoObject.newTodoName);
    } else {
      this.updateExitedTodo(todo, todoObject)
    }
  }

  getTodo(todoName) {
    return this.todoList.find(todoElement => todoElement.name === todoName);
  }

  createNewTodo(todoName) {
    const dateManager = getService("dateManager");
    const todayDate = dateManager.getTodayDate();
    this.todoList.push({name: todoName, date: todayDate})
  }

  updateExitedTodo(todo, todoObject) {
    todo.name = todoObject.newTodoName;
  }

  changeTodoDate(todoName, newTodoDate) {
    const todo = this.getTodo(todoName);
    todo.date = newTodoDate;
  }

  removeTodo(todoName) {
    const position = this.todoList.findIndex(todo => todo.name === todoName);
    this.todoList.splice(position, position);
  }
}