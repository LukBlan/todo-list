export {dateManager}

class dateManager {
  constructor() {
    this.today = new Date();
  }

  getTodayDate() {
    const year = this.today.getFullYear();
    const month = this.today.getMonth() + 1
    const formattedMonth = (month < 10)? `0${month}`: month;
    const day = this.today.getDate();
    return `${day}-${formattedMonth}-${year}`
  }

  giveFormat(date, format) {
    let dateFormatted = format;
    const dateArray = date.split("-")
    dateFormatted = dateFormatted.replace("d", dateArray[0]);
    dateFormatted = dateFormatted.replace("m", dateArray[1]);
    dateFormatted = dateFormatted.replace("y", dateArray[2]);
    return dateFormatted;
  }
}

