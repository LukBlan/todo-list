import {newProjectButtonElement} from "./project/new-project-button-element.js"
import {todoFactory} from "./todo/todo-factory/todo-factory";
import {newTodoButton} from "./todo/new-todo-button";
import {NewTodoFactory} from "./todo/todo-factory/new-todo-factory";

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
newService("newTodoFactory", new NewTodoFactory());
newService("newProjectButton", newProjectButtonElement);