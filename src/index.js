import {displayNewProjectButton} from "./aside-view-controller.js";
import {subscribe} from "./pub-sub.js";
import {} from "./project-database.js"
import "./styles.css"

subscribe("duplicateProject", function(projectName) {
  alert(`Project ${projectName} already exist`);
})

displayNewProjectButton()