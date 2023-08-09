import {newProjectButtonElement} from "./project/new-project-button-element.js"
import {todoFactory} from "./todo/todo-factory";
import {newTodoButton} from "./todo/new-todo-button";

export {getService}

const services = {}

function newService(name, service) {
  services[name] = service;
}

function getService(name) {
  return services[name];
}

newService("newTodoButton", newTodoButton);
newService("todoFactory", new todoFactory());
newService("newProjectButton", newProjectButtonElement);