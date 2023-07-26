import {subscribe, emit} from "./pub-sub";

const projects = []

subscribe("checkNewProject", checkNewProject)
subscribe("renderProject", emitProjectTodos)

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
  const newProject = {};
  newProject.name = projectName;
  newProject.todoList = [{name:"example", completed: true}];
  projects.push(newProject)
}

function emitProjectTodos(projectName) {
  const project = projects.find(project => project.name === projectName);
  emit("renderTodos", project.todoList)
}