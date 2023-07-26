import {getService} from "./service-locator";
import {subscribe, emit} from "./pub-sub";

export {displayNewProjectButton}

subscribe("newProjectElement", displayNewProject)

const newProjectButtonElement = getService("newProjectButton");
const projectListDomElement = document.querySelector(".project-list");

projectListDomElement.addEventListener("click", renderProject);

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

function renderProject(event) {
  if (event.target.nodeName === "LI") {
    const projectName = event.target.innerText;
    emit("renderProject", projectName);
  }
}