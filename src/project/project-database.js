import {subscribe, emit} from "../others/pub-sub";
import {Project} from "./project-class";
import {getService} from "../others/service-locator";

const projects = []

subscribe("checkNewProject", checkNewProject)
subscribe("projectChanged", emitProjectTodos)
subscribe("todoChange", updateTodo)
subscribe("newTodo", checkNewTodo)
subscribe("updateDate", updateTodoDate)
subscribe("removeTodo", removeTodo)
subscribe("deleteProject", deleteProject)
subscribe("getTodayTodos", todayTodos);

const dateFilter = {
  Today: function () {
    const dateManager = getService("dateManager");
    const todayDate = dateManager.getTodayDate();
    return projects.filter(project => project.getNumberOfTodosBetween(todayDate, todayDate))
  },

  Week: function () {
    const dateManager = getService("dateManager");
    const firstDayOfTheWeek = dateManager.getFirstDayWeek();
    const lastDayOfTheWeek = dateManager.getLastDayWeek()
    return projects.filter(project => project.getNumberOfTodosBetween(firstDayOfTheWeek, lastDayOfTheWeek))
  }
}

function todayTodos(text) {
  const projectsList = dateFilter[text]();
  emit("renderTodayTodos", {text, projectsList});
}

function checkNewProject(projectName) {
  if (checkEmptyName(projectName)) {
    emit("emptyProjectName", null);
  } else if (checkDuplicateProject(projectName)) {
    emit("duplicateProject", projectName);
  } else {
    createNewProject(projectName);
    renderProjects("newProject");
    emit("renderProject", projectName);
  }
}

function renderProjects(eventType) {
  const projectsNames = projects.map(project => project.name);
  emit(eventType, projectsNames);
}

function checkEmptyName(projectName) {
  return projectName.length === 0;
}

function checkDuplicateProject(projectName) {
  const allProjectNames = projects.map(project => project.name);
  return allProjectNames.includes(projectName);
}

function createNewProject(projectName) {
  const newProject = new Project(projectName);
  projects.push(newProject)
}

function emitProjectTodos(projectName) {
  const project = getProject(projectName);
  emit("renderTodos", project.todoList);
}

function updateTodo(todoObject) {
  const project = getProject(todoObject.project);
  const todoInProject = project.getTodo(todoObject.newTodoName)
  if (todoInProject === undefined) {
    project.updateTodo(todoObject);
    emit("renderProject", todoObject.project);
  } else {
    alert("Todo Already Exits");
  }

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

function removeTodo(projectObject) {
  const projectName = projectObject.project;
  const project = getProject(projectName)
  project.removeTodo(projectObject.todo);
  emit("renderProject", projectName);
}

function deleteProject(projectName) {
  const position = projects.findIndex(project => project.name === projectName);
  projects.splice(position, 1);
  renderProjects("projectsUpdated");
  const firstProject = projects[0];
  if (firstProject === undefined) {
    emit("renderTodayTodos", {text:"Today", projectsList:null});
  } else {
    emit("renderProject", firstProject.name);
  }
}

function getProject(projectName) {
  return projects.find(project => project.checkName(projectName));
}