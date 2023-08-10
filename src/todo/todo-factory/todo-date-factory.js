export {TodoDateFactory}

class TodoDateFactory {
  constructor() {
    this.todayDate = new Date();
  }

  generateTodoDate() {
    const todoDateContainer = document.createElement("p");
    todoDateContainer.innerText = this.#getTodayDate()
    todoDateContainer.addEventListener("click", this.#changeToInput.bind(this));
    return todoDateContainer;
  }

  #getTodayDate() {
    const year = this.todayDate.getFullYear();
    const month = this.todayDate.getMonth() + 1
    const formattedMonth = (month < 10)? `0${month}`: month;
    const day = this.todayDate.getDate();
    return `${year}-${formattedMonth}-${day}`
  }

  #changeToInput(event) {
    const date = event.target.innerText;
    console.log(date)
    const todoInput = this.#generateTodoInput(date);
    event.target.parentElement.replaceChild(todoInput, event.target);
    todoInput.focus();
  }

  #generateTodoInput(date) {
    const inputElement = document.createElement("input");
    inputElement.type = "date";
    inputElement.value = date;
    return inputElement;
  }
}