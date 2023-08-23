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
    this.updateExitedTodo(todo, todoObject)
  }

  getTodo(todoName) {
    return this.todoList.find(todoElement => todoElement.name === todoName);
  }

  createNewTodo(todoName) {
    const dateManager = getService("dateManager");
    const todayDate = dateManager.getTodayDate();
    this.todoList.push({
      name: todoName,
      date: todayDate,
      between: function (initialDate, endDate) {
        const initialTime = dateManager.getDateWith(initialDate).getTime()
        const endDateTime = dateManager.getDateWith(endDate).getTime();
        const todoDateTime = dateManager.getDateWith(this.date).getTime();
        return initialTime <= todoDateTime && todoDateTime <= endDateTime;
      }
    })
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
    this.todoList.splice(position, 1);
  }

  filterTodos(beginningDate, endDate) {
    return {
      name: this.name,
      todoList: this.todoList.filter(todo => todo.between(beginningDate, endDate))
    }
  }
}