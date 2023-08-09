import {subscribe} from "../pub-sub";
import {getService} from "../service-locator";

const title = document.querySelector("h2");
const todoSection = document.querySelector(".todo-section");
const todoFactory = getService("todoFactory");
const todoButton = getService("newTodoButton");

subscribe("renderProject", renderTitle);
subscribe("renderTodos", renderTodos);

function renderTitle(projectName) {
  todoFactory.setProjectName(projectName);
  title.innerText = projectName;
}

function renderTodos(todoList) {
  todoSection.innerHTML = "";
  todoList.forEach(todo => {
    const todoElement = todoFactory.build(todo)
    todoSection.append(todoElement)
  })
  todoSection.append(todoButton);
}