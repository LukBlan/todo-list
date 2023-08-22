export {ProjectCardFactory}

class ProjectCardFactory {
  build(project) {
    const container = document.createElement("div");
    const projectNameElement = this.#createProjectTitle(project.name);
    container.append(projectNameElement);
    return container;
  }

  #createProjectTitle(project) {
    const titleObject = document.createElement("h4");
    titleObject.innerText = project;
    return titleObject;
  }
}