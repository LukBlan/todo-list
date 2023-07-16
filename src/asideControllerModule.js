import {newProjectButtonElement} from "./newProjectButtonElement.js"

export {displayInitialPage}

function displayInitialPage() {
  const asideUl = document.querySelector("ul");
  asideUl.append(newProjectButtonElement);
}
