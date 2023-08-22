import {emit} from "../others/pub-sub";

const today = document.querySelector(".timed-option");

today.addEventListener("click", renderTodayTodos);

function renderTodayTodos(event) {
  if (event.target.nodeName === "P") {
    emit("getTodayTodos", event.target.innerText);
  }

}

