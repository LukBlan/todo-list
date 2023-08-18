export {TodoDateFactory}

class TodoDateFactory {
  constructor() {
    this.todayDate = new Date();
  }

  generateTodoDate() {
    const todoDateContainer = document.createElement("p");
    todoDateContainer.innerText = this.#getTodayDate()
    todoDateContainer.addEventListener("click", this.#changeToInput(this));
    return todoDateContainer;
  }

  #getTodayDate() {
    const year = this.todayDate.getFullYear();
    const month = this.todayDate.getMonth() + 1
    const formattedMonth = (month < 10)? `0${month}`: month;
    const day = this.todayDate.getDate();
    return `${year}-${formattedMonth}-${day}`
  }

  #changeToInput(classObject) {
    return function () {
      const date = this.innerText;
      const todoInput = classObject.#generateTodoInput(date);
      this.parentElement.replaceChild(todoInput, this);
      todoInput.focus();
    }
  }

  #generateTodoInput(date) {
    const inputElement = document.createElement("input");
    inputElement.classList.add("date-input");
    inputElement.type = "date";
    inputElement.value = date;
    return inputElement;
  }
}