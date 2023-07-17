import {emit} from "./pub-sub.js";

export {newProjectButtonElement}

const newProjectButtonElement = generateNewProjectButton() ;
const newProjectInputElement = generateInputElement();

function generateNewProjectButton() {
  const liElement = document.createElement("li");
  const pElement = document.createElement("p");
  pElement.innerText = "＋";
  pElement.classList.add("aside-element-text");
  pElement.addEventListener("click", replaceButton)
  liElement.append(pElement);
  return liElement;
}

function replaceButton(event) {
  event.target.parentElement.replaceChild(newProjectInputElement, event.target);
}

function generateInputElement() {
  const newProjectInput =  document.createElement("input");
  newProjectInput.classList.add("new-project-input");
  newProjectInput.placeholder = "Project Name"
  newProjectInput.addEventListener("keyup", checkKeyPressed);
  return newProjectInput;
}

function checkKeyPressed(event) {
  const keyPressed = event.key;
  if (keyPressed === "Enter") {
    const projectName = event.target.value;
    emit("newProject", projectName);
  }
}