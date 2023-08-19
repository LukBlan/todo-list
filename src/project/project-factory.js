import {emit, subscribe} from "../others/pub-sub";

subscribe("newProject", createNewProjectDomElement);

function createNewProjectDomElement(projectName) {
  const liElement = document.createElement("li");
  liElement.innerText = projectName;
  liElement.classList.add("aside-element-text");
  emit("newProjectElement",liElement);
}