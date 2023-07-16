export {newProjectButtonElement}

const newProjectButtonElement = generateNewProjectButton() ;
const newProjectInputElement = generateInputElement();

function generateNewProjectButton() {
  const liElement = document.createElement("li");
  const pElement = document.createElement("p");
  pElement.innerText = "New Project";
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
  return newProjectInput;
}