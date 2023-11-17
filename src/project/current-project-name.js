import { subscribe } from '../others/pub-sub';

let currentProjectName = null;

function setProjectName(name) {
  currentProjectName = name;
}

function getProjectName() {
  return currentProjectName;
}

subscribe('projectChanged', setProjectName);

export { getProjectName };
