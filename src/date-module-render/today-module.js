import { emit } from '../others/pub-sub';

const today = document.querySelector('.timed-option');

function renderTodayTodos(event) {
  if (event.target.nodeName === 'P') {
    emit('getTodayTodos', event.target.innerText);
  }
}

today.addEventListener('click', renderTodayTodos);
