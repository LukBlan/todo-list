import {newProjectButtonElement} from "./new-project-button-element.js"
import {todoFactory} from "./todo-factory";
import {newTodoButton} from "./new-todo-button";

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