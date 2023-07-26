import {subscribe} from "./pub-sub";

const sectionTitle = document.querySelector("h2");

subscribe("renderProject", renderTitle);

function renderTitle(projectName) {
  sectionTitle.innerText = projectName;
}