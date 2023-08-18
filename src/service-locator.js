import {newProjectButtonElement} from "./project/new-project-button-element.js"
import {todoFactory} from "./todo/todo-factory/todo-factory";
import {NewTodoFactory} from "./todo/todo-factory/new-todo-factory";
import {NewTodoButton} from "./todo/new-todo-button";

export {getService}

const services = {}

function newService(name, service) {
  services[name] = service;
}

function getService(name) {
  return services[name];
}

newService("newTodoButton", new NewTodoButton())
newService("todoFactory", new todoFactory());
newService("newTodoFactory", new NewTodoFactory());
newService("newProjectButton", newProjectButtonElement);