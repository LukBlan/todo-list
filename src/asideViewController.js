import {newProjectButtonElement} from "./newProjectButtonElement.js"

export {displayNewProjectButtonOnAside}

const projectListDomElement = document.querySelector(".project-list");

function displayNewProjectButtonOnAside() {
  projectListDomElement.append(newProjectButtonElement);
}
