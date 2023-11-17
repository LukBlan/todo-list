import { emit } from '../others/pub-sub';

class ProjectElementFactory {
  build(projectName) {
    const liElement = document.createElement('li');
    const pElement = this.#generateProjectName(projectName);
    const deleteButton = this.#createDeleteButton(projectName);

    liElement.classList.add('project-aside-element');
    liElement.append(pElement);
    liElement.append(deleteButton);
    return liElement;
  }

  #generateProjectName(projectName) {
    const pElement = document.createElement('p');
    pElement.innerText = projectName;
    return pElement;
  }

  #createDeleteButton(projectName) {
    const deleteButton = document.createElement('span');
    deleteButton.addEventListener('click', this.#deleteProject(projectName));
    deleteButton.innerText = 'x';
    deleteButton.classList.add('delete-project-button');
    return deleteButton;
  }

  #deleteProject(projectName) {
    return function () {
      emit('deleteProject', projectName);
    };
  }
}

export { ProjectElementFactory };
