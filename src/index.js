import {displayNewProjectButton} from "./view/aside-view-controller.js";
import {subscribe} from "./others/pub-sub.js";
import {} from "./project/project-database.js"
import {} from "./project/project-element-factory.js"
import {} from "./view/project-render.js"
import {} from "./date-module-render/today-module.js"
import {} from "./date-module-render/today-render.js"
import "./css/styles.css"


subscribe("duplicateProject", function(projectName) {
  alert(`Project ${projectName} already exist`);
})

subscribe("emptyProjectName", function() {
  alert(`Project name is empty`);
})

displayNewProjectButton()