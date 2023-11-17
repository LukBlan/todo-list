import { getService } from '../others/service-locator';

class NewTodoButton {
  build(projectName) {
    this.newTodoButton = this.#getNewTodoButton(projectName);
    return this.newTodoButton;
  }

  #getNewTodoButton(projectName) {
    const newTodoButton = document.createElement('button');
    newTodoButton.innerText = '＋';
    newTodoButton.classList.add('new-todo-button');
    newTodoButton.addEventListener('mouseup', this.#changeButton(projectName, this));
    return newTodoButton;
  }

  #changeButton(projectName, todoObject) {
    return function (event) {
      const { parentElement } = event.target;
      const newTodoInput = todoObject.#generateTodoBoilerPlate(projectName);
      parentElement.replaceChild(newTodoInput, todoObject.newTodoButton);
    };
  }

  #generateTodoBoilerPlate(projectName) {
    const newTodoFactory = getService('newTodoFactory');
    return newTodoFactory.build(projectName);
  }
}

export { NewTodoButton };
