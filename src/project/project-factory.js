export {ProjectElementFactory}

class ProjectElementFactory {
  build(projectName) {
    const liElement = document.createElement("li");
    liElement.innerText = projectName;
    liElement.classList.add("aside-element-text");
    return liElement;
  }
}