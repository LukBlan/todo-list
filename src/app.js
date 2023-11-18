import { displayNewProjectButton } from './view/aside-view-controller';
import { subscribe } from './others/pub-sub';
import {} from './project/project-database';
import {} from './project/project-element-factory';
import {} from './view/project-render';
import {} from './date-module-render/today-module';
import { loadProjects } from './others/local-storage';
import {} from './date-module-render/today-render';
import './styles.css';

subscribe('duplicateProject', (projectName) => {
  alert(`Project ${projectName} already exist`);
});

subscribe('emptyProjectName', () => {
  alert('Project name is empty');
});

loadProjects();
