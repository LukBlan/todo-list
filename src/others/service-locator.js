import { newProjectButtonElement } from '../project/new-project-button-element';
import { TodoFactory } from '../todo/todo-factory/todo-factory';
import { NewTodoFactory } from '../todo/todo-factory/new-todo-factory';
import { NewTodoButton } from '../todo/new-todo-button';
import { getProjectName } from '../project/current-project-name';
import { DateManager } from './dateManager';
import { ProjectElementFactory } from '../project/project-element-factory';
import { ProjectCardFactory } from '../project/project-card-factory';

const services = {};

function newService(name, service) {
  services[name] = service;
}

function getService(name) {
  return services[name];
}

newService('projectElementFactory', new ProjectElementFactory());
newService('dateManager', new DateManager());
newService('getProjectName', getProjectName);
newService('newTodoButton', new NewTodoButton());
newService('todoFactory', new TodoFactory());
newService('newTodoFactory', new NewTodoFactory());
newService('newProjectButton', newProjectButtonElement);
newService('projectCardFactory', new ProjectCardFactory());

export { getService };
