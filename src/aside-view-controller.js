import {getService} from "./service-locator";
import {subscribe} from "./pub-sub";

export {displayNewProjectButton}

subscribe("newProjectElement", displayNewProject)

const newProjectButtonElement = getService("newProjectButton");
const projectListDomElement = document.querySelector(".project-list");

function displayNewProjectButton() {
  projectListDomElement.append(newProjectButtonElement);
}

function removeNewProjectButton() {
  projectListDomElement.removeChild(newProjectButtonElement);
}

function displayNewProject(newProjectDomElement) {
  removeNewProjectButton();
  projectListDomElement.append(newProjectDomElement);
  displayNewProjectButton();
}