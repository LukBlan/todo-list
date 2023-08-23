import {getService} from "../others/service-locator";
import {subscribe, emit} from "../others/pub-sub";

subscribe("newProject", displayNewProject)
subscribe("projectsUpdated", displayNewProject);

const newProjectButtonElement = getService("newProjectButton");
const projectListDomElement = document.querySelector(".project-list");
const projectElementFactory = getService("projectElementFactory");

projectListDomElement.addEventListener("click", renderProject);

function displayNewProject(projects) {
  projectListDomElement.innerHTML = "";
  projects.forEach(project => {
    const projectElement = projectElementFactory.build(project);
    projectListDomElement.append(projectElement);
  })
  projectListDomElement.append(newProjectButtonElement);
}

function renderProject(event) {
  if (event.target.nodeName === "P") {
    const projectName = event.target.innerText;
    emit("renderProject", projectName);
  }
}