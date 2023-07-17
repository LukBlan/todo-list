import {newProjectButtonElement} from "./newProjectButtonElement.js"
export {displayNewProjectButton}

const projectListDomElement = document.querySelector(".project-list");

function displayNewProjectButton() {
  projectListDomElement.append(newProjectButtonElement);
}

function removeNewProjectButton() {
  projectListDomElement.removeChild(projectListDomElement);
}

/*
function displayNewProject(newProjectDomElement) {
  removeNewProjectButton();
  newProjectDomElement.append(newProjectDomElement);
  displayNewProjectButton();
}
 */