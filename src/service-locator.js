import {newProjectButtonElement} from "./new-project-button-element.js"

export {getService}

const services = {}

function newService(name, service) {
  services[name] = service;
}

function getService(name) {
  return services[name];
}

newService("newProjectButton", newProjectButtonElement);
