import { emit } from '../../others/pub-sub';
import { TodoDateFactory } from './todo-date-factory';
import { getService } from '../../others/service-locator';

class TodoFactory {
  constructor() {
    this.todoDateFactory = new TodoDateFactory();
  }

  build(todoObject) {
    const todoContainer = this.#generateContainer();
    const todoName = this.#generateTodoName(todoObject.name);
    const todoDate = this.todoDateFactory.generateTodoDate(todoObject.date);
    const deleteTodoButton = this.#generateDeleteTodoButton();

    todoContainer.append(todoName);
    todoContainer.append(todoDate);
    todoContainer.append(deleteTodoButton);
    return todoContainer;
  }

  #generateDeleteTodoButton() {
    const deleteTodoButton = document.createElement('button');
    deleteTodoButton.innerText = 'x';
    deleteTodoButton.classList.add('delete-todo-button');
    deleteTodoButton.addEventListener('click', this.#removeTodo);
    return deleteTodoButton;
  }

  #removeTodo(event) {
    const todoElement = event.target.parentElement.firstChild;
    const todo = todoElement.innerText;
    const project = getService('getProjectName')();
    emit('removeTodo', { project, todo });
  }

  #generateTodoName(name) {
    const todoNameContainer = document.createElement('p');
    todoNameContainer.innerText = name;
    todoNameContainer.classList.add('todo-name');
    todoNameContainer.addEventListener('click', this.#changeToInput.bind(this));
    return todoNameContainer;
  }

  #changeToInput(event) {
    const todoName = event.target.innerText;
    const todoInput = this.#generateTodoInput(todoName);
    todoInput.placeholder = 'New Todo Name';
    event.target.parentElement.replaceChild(todoInput, event.target);
    todoInput.focus();
  }

  #generateContainer() {
    const container = document.createElement('div');
    container.classList.add('todo-element');
    return container;
  }

  setProjectName(projectName) {
    this.projectName = projectName;
  }

  #generateTodoInput(inputContent) {
    const todoInput = document.createElement('input');
    todoInput.value = inputContent;
    todoInput.classList.add('todo-input');
    todoInput.addEventListener(
      'keydown',
      this.#createNewTodo.bind({ todoObject: this, inputValue: inputContent }),
    );
    return todoInput;
  }

  #createNewTodo(event) {
    const keyPressed = event.key;

    if (keyPressed === 'Enter') {
      const todoName = event.target.value;
      const todoObject = {
        project: this.todoObject.projectName,
        oldTodoName: this.inputValue,
        newTodoName: todoName,
      };

      emit('todoChange', todoObject);
    }
  }
}

export { TodoFactory };
