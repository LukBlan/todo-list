import {getService} from "./service-locator";

export {displayNewProjectButton}

const newProjectButtonElement = getService("newProjectButton");
const projectListDomElement = document.querySelector(".project-list");

function displayNewProjectButton() {
  projectListDomElement.append(newProjectButtonElement);
}

function removeNewProjectButton() {
  projectListDomElement.removeChild(newProjectButtonElement);
}

/*
function displayNewProject(newProjectDomElement) {
  removeNewProjectButton();
  newProjectDomElement.append(newProjectDomElement);
  displayNewProjectButton();
}
 */