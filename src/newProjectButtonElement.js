export {newProjectButtonElement}

const newProjectButtonElement = generateNewProjectButton() ;
//const newProjectFormElement;

function generateNewProjectButton() {
  const container = document.createElement("li");
  container.innerText = "New Project";
  return container;
}