import { emit, subscribe } from './pub-sub';
import { Project } from '../project/project-class';
import { Todo } from '../todo/todo-class';

function loadProjects() {
  if (localStorage.length !== 0) {
    const projectObjects = JSON.parse(localStorage.getItem('projects'));
    const projects = projectObjects.map(
      (project) => new Project(project.name, project.todoList.map((todo) => new Todo(todo.name))),
    );
    emit('loadProjects', projects);
  } else {
    emit('displayNewProjectButton', null);
  }
}

function saveProjects(projectList) {
  const serializedProjects = JSON.stringify(projectList);
  localStorage.setItem('projects', serializedProjects);
}

subscribe('saveProjects', saveProjects);

export { loadProjects };
