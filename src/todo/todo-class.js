import {getService} from "../others/service-locator";

export {Todo}

class Todo {
  constructor(name) {
    this.name = name;
    this.date = getService("dateManager").getTodayDate();
  }

  between(initialDate, endDate) {
    const dateManager = getService("dateManager");
    const initialTime = dateManager.getDateWith(initialDate).getTime()
    const endDateTime = dateManager.getDateWith(endDate).getTime();
    const todoDateTime = dateManager.getDateWith(this.date).getTime();
    return initialTime <= todoDateTime && todoDateTime <= endDateTime;
  }
}