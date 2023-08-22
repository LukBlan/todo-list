export {ProjectCardFactory}

class ProjectCardFactory {
  build(project) {
    const container = document.createElement("div");
    const projectName = this.#createProjectTitle(project.name);
  }

  #createProjectTitle(project) {

  }
}