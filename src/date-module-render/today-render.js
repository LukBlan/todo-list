import {getService} from "../others/service-locator";
import {subscribe} from "../others/pub-sub";

subscribe("renderTodayTodos", renderDom);

const title = document.querySelector("h2");
const todoSection = document.querySelector(".todo-section");

function renderDom(renderObject) {
  const projectList = renderObject.projectsList;
  title.innerText = renderObject.text;
  todoSection.innerHTML = "";
  if (projectList !== null) {
    const projectCardFactory = getService("projectCardFactory");
    projectList.forEach(project => {
      const projectCard = projectCardFactory.build(project)
      todoSection.append(projectCard)
    })
  }



}