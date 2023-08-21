import {subscribe, emit} from "../others/pub-sub";
import {Project} from "./project-class";

const projects = []

subscribe("checkNewProject", checkNewProject)
subscribe("projectChanged", emitProjectTodos)
subscribe("todoChange", updateTodo)
subscribe("newTodo", checkNewTodo)
subscribe("updateDate", updateTodoDate)

function checkNewProject(projectName) {
  if (checkEmptyName(projectName)) {
    emit("emptyProjectName", null);
  } else if (checkDuplicateProject(projectName)) {
    emit("duplicateProject", projectName);
  } else {
    generateNewProject(projectName);
    emit("newProject", projectName);
  }
}

function checkEmptyName(projectName) {
  return projectName.length === 0;
}

function checkDuplicateProject(projectName) {
  const allProjectNames = projects.map(project => project.name);
  return allProjectNames.includes(projectName);
}

function generateNewProject(projectName) {
  const newProject = new Project(projectName);
  projects.push(newProject)
}

function emitProjectTodos(projectName) {
  const project = getProject(projectName);
  emit("renderTodos", project.todoList);
}

function updateTodo(todoObject) {
  const project = getProject(todoObject.project);
  project.updateTodo(todoObject);
  emit("renderProject", todoObject.project);
}

function checkNewTodo(newTodoObject) {
  const projectName = newTodoObject.project;
  const todoName = newTodoObject.todo;
  const project = getProject(projectName);
  const projectTodo = project.getTodo(todoName);
  if (projectTodo === undefined) {
    createNewTodo(project, todoName)
  } else {
    alert("Todo Already Exits")
  }
}

function createNewTodo(project, todoName) {
  project.createNewTodo(todoName);
  emit("renderProject", project.name);
}

function updateTodoDate(todoObject) {
  const project = getProject(todoObject.project)
  project.changeTodoDate(todoObject.todo, todoObject.date)
  emit("renderProject", todoObject.project);
}

function getProject(projectName) {
  return projects.find(project => project.checkName(projectName));
}