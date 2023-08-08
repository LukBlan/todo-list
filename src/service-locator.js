import {newProjectButtonElement} from "./new-project-button-element.js"
import {todoFactory} from "./todo-factory";

export {getService}

const services = {}

function newService(name, service) {
  services[name] = service;
}

function getService(name) {
  return services[name];
}

newService("todoFactory", new todoFactory());
newService("newProjectButton", newProjectButtonElement);