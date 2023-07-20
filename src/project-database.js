import {subscribe, emit} from "./pub-sub";

const projects = []

subscribe("checkNewProject", checkNewProject)

function checkNewProject(projectName) {
  if (checkDuplicateProject(projectName)) {
    emit("duplicateProject", projectName);
  } else {
    generateNewProject(projectName);
    emit("newProject", projectName);
  }
}

function checkDuplicateProject(projectName) {
  const allProjectNames = projects.map(project => project.name);
  return allProjectNames.includes(projectName);
}

function generateNewProject(projectName) {
  const newProject = {};
  newProject.name = projectName;
  newProject.todoList = [];
  projects.push(newProject)
}