import {displayNewProjectButton} from "./aside-view-controller.js";
import {subscribe} from "./pub-sub.js";
import {} from "./project-database.js"
import {} from  "./project-factory.js"
import {} from  "./project-render.js"
import "./styles.css"

subscribe("duplicateProject", function(projectName) {
  alert(`Project ${projectName} already exist`);
})

subscribe("emptyProjectName", function() {
  alert(`Project name is empty`);
})

displayNewProjectButton()