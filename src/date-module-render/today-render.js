import {getService} from "../others/service-locator";
import {subscribe} from "../others/pub-sub";

subscribe("renderTodayTodos", renderDom);

const title = document.querySelector("h2");
const todoSection = document.querySelector(".todo-section");

function renderDom(renderObject) {
  title.innerText = renderObject.text;
  todoSection.innerHTML = "";
  const projectCardFactory = getService("projectCardFactory");
  console.log(renderObject.projectsList)
}