import {subscribe, emit} from "./pub-sub";

const projects = []

subscribe("newProject", createNewProject)

function createNewProject(projectName) {
  if (checkDuplicateProject(projectName)) {
    emit("duplicateProject", projectName);
  } else {
    generateNewProject(projectName);
    //emit("newProjectAdd", projectName);
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