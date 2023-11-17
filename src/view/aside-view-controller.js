import { getService } from '../others/service-locator';
import { subscribe, emit } from '../others/pub-sub';

const newProjectButtonElement = getService('newProjectButton');
const projectListDomElement = document.querySelector('.project-list');
const projectElementFactory = getService('projectElementFactory');

function appendNewProjectButton() {
  projectListDomElement.append(newProjectButtonElement);
}

function displayNewProject(projects) {
  projectListDomElement.innerHTML = '';
  projects.forEach((project) => {
    const projectElement = projectElementFactory.build(project);
    projectListDomElement.append(projectElement);
  });
  appendNewProjectButton();
}

function renderProject(event) {
  if (event.target.nodeName === 'P') {
    const projectName = event.target.innerText;
    emit('renderProject', projectName);
  }
}

projectListDomElement.addEventListener('click', renderProject);

subscribe('newProject', displayNewProject);
subscribe('projectsUpdated', displayNewProject);
subscribe('displayNewProjectButton', appendNewProjectButton);
