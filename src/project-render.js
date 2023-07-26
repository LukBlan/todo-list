import {subscribe} from "./pub-sub";

const title = document.querySelector("h2");
const todoSection = document.querySelector(".todos-section");

subscribe("renderProject", renderTitle);
subscribe("renderTodos", renderTodos);

function renderTitle(projectName) {
  title.innerText = projectName;
}

function renderTodos(todoList) {
  todoSection.innerHTML = "";
  todoList.forEach(todoElement => {
    const container = document.createElement("p");
    container.innerText = todoElement.name;
    todoSection.append(container)
  })
}