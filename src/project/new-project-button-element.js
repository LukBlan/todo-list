import { emit, subscribe } from '../others/pub-sub';

const newProjectInputElement = generateInputElement();
const newProjectParagraphElement = generatePElement();
const newProjectButtonElement = generateNewProjectButton();

function changeInputToButton() {
  newProjectButtonElement.replaceChild(newProjectParagraphElement, newProjectInputElement);
}

function replaceButton(event) {
  event.target.parentElement.replaceChild(newProjectInputElement, event.target);
  newProjectInputElement.value = '';
  newProjectInputElement.focus();
}

function generatePElement() {
  const pElement = document.createElement('div');
  pElement.innerText = '＋';
  pElement.classList.add('aside-element-text');
  pElement.addEventListener('click', replaceButton);
  return pElement;
}

function generateNewProjectButton() {
  const liElement = document.createElement('li');
  liElement.append(newProjectParagraphElement);
  return liElement;
}

function checkKeyPressed(event) {
  const keyPressed = event.key;
  const projectName = event.target.value;

  if (keyPressed === 'Enter' && projectName.length !== 0) {
    emit('checkNewProject', projectName);
  }
}

function generateInputElement() {
  const newProjectInput = document.createElement('input');
  newProjectInput.classList.add('new-project-input');
  newProjectInput.placeholder = 'Project Name';
  newProjectInput.addEventListener('keyup', checkKeyPressed);
  return newProjectInput;
}

subscribe('newProject', changeInputToButton);

export { newProjectButtonElement };
