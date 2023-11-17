import { getService } from '../others/service-locator';
import { Todo } from '../todo/todo-class';

class Project {
  constructor(name, todoList) {
    this.name = name;
    this.todoList = todoList;
  }

  checkName(projectName) {
    return this.name === projectName;
  }

  updateTodo(todoObject) {
    const todo = this.getTodo(todoObject.oldTodoName);
    this.updateExitedTodo(todo, todoObject);
  }

  getTodo(todoName) {
    return this.todoList.find((todoElement) => todoElement.name === todoName);
  }

  createNewTodo(todoName) {
    this.todoList.push(new Todo(todoName));
  }

  updateExitedTodo(todo, todoObject) {
    todo.name = todoObject.newTodoName;
  }

  changeTodoDate(todoName, newTodoDate) {
    const todo = this.getTodo(todoName);
    todo.date = newTodoDate;
  }

  removeTodo(todoName) {
    const position = this.todoList.findIndex((todo) => todo.name === todoName);
    this.todoList.splice(position, 1);
  }

  filterTodos(beginningDate, endDate) {
    return {
      name: this.name,
      todoList: this.todoList.filter((todo) => todo.between(beginningDate, endDate)),
    };
  }
}

export { Project };
