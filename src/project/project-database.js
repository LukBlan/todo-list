import {subscribe, emit} from "../pub-sub";
import {Project} from "./project-class";

const projects = []

subscribe("checkNewProject", checkNewProject)
subscribe("getTodos", emitProjectTodos)
subscribe("todoChange", updateTodo)
subscribe("newTodo", createNewTodo)

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
  const project = projects.find(project => project.checkName(projectName));
  emit("renderTodos", project.todoList);
}

function updateTodo(todoObject) {
  const project = projects.find(project => project.checkName(todoObject.project));
  project.updateTodo(todoObject);
  emit("renderProject", todoObject.project);
}

function createNewTodo(newTodoObject) {
  const projectName = newTodoObject.project;
  const todoName = newTodoObject.todo;
  const project = projects.find(project => project.checkName(newTodoObject.project));
  project.createNewTodo(todoName);
  emit("renderProject", projectName);
}