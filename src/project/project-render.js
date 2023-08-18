import {emit, subscribe} from "../pub-sub";
import {getService} from "../service-locator";

const title = document.querySelector("h2");
const todoSection = document.querySelector(".todo-section");
const todoFactory = getService("todoFactory");

subscribe("renderProject", renderTitle);
subscribe("renderTodos", renderTodos);

function renderTitle(projectName) {
  todoFactory.setProjectName(projectName);
  title.innerText = projectName;
  emit("getTodos", projectName);
}

function renderTodos(todoList) {
  const projectName = title.innerText;
  const newTodoButtonFactory = getService("newTodoButton");
  const newTodoButton = newTodoButtonFactory.build(projectName);
  todoSection.innerHTML = "";
  todoList.forEach(todo => {
    const todoElement = todoFactory.build(todo)
    todoSection.append(todoElement)
  })
  todoSection.append(newTodoButton);
}