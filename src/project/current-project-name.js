import {subscribe} from "../others/pub-sub";
export {getProjectName}

subscribe("projectChanged", setProjectName);

let currentProjectName = null

function setProjectName(name) {
  currentProjectName = name;
}

function getProjectName() {
  return currentProjectName;
}