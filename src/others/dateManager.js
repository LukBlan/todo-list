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

  getDateWith(dateWithoutFormat) {
    const formatDate = dateWithoutFormat.split("-").reverse().join("-");
    return new Date(formatDate);
  }

  getFirstDayWeek() {
    const month = this.today.getMonth() + 1;
    const year = this.today.getFullYear();
    const first = this.today.getDate() - this.today.getDay() + 1;
    return `${first}-${month}-${year}`
  }

  getLastDayWeek() {
    const month = this.today.getMonth() + 1;
    const year = this.today.getFullYear();
    const first = this.today.getDate() - this.today.getDay() + 1;
    const last = first + 6;
    return `${last}-${month}-${year}`
  }
}

