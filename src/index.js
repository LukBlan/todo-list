import {displayNewProjectButton} from "./view/aside-view-controller.js";
import {subscribe} from "./others/pub-sub.js";
import {} from "./project/project-database.js"
import {} from "./project/project-factory.js"
import {} from "./view/project-render.js"
import "./css/styles.css"

subscribe("duplicateProject", function(projectName) {
  alert(`Project ${projectName} already exist`);
})

subscribe("emptyProjectName", function() {
  alert(`Project name is empty`);
})

displayNewProjectButton()