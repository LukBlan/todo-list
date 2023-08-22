import {getService} from "../others/service-locator";
import {subscribe, emit} from "../others/pub-sub";

export {displayNewProjectButton}

subscribe("newProject", displayNewProject)

const newProjectButtonElement = getService("newProjectButton");
const projectListDomElement = document.querySelector(".project-list");
const projectElementFactory = getService("projectElementFactory");

projectListDomElement.addEventListener("click", renderProject);

function displayNewProjectButton() {
  projectListDomElement.append(newProjectButtonElement);
}

function removeNewProjectButton() {
  projectListDomElement.removeChild(newProjectButtonElement);
}

function displayNewProject(projects) {
  projectListDomElement.innerHTML = "";
  projects.forEach(project => {
    const projectElement = projectElementFactory.build(project);
    projectListDomElement.append(projectElement);
  })
  displayNewProjectButton();
}

function renderProject(event) {
  if (event.target.nodeName === "LI") {
    const projectName = event.target.innerText;
    emit("renderProject", projectName);
  }
}