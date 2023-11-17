class DateManager {
  constructor() {
    this.today = new Date();
  }

  getDayOfMoths() {
    return [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  }

  getTodayDate() {
    const year = this.today.getFullYear();
    const month = this.today.getMonth() + 1;
    const formattedMonth = (month < 10) ? `0${month}` : month;
    const day = this.today.getDate();
    const formattedDay = (day < 10) ? `0${day}` : day;
    return `${formattedDay}-${formattedMonth}-${year}`;
  }

  giveFormat(date, format) {
    let dateFormatted = format;
    const dateArray = date.split('-');
    dateFormatted = dateFormatted.replace('d', dateArray[0]);
    dateFormatted = dateFormatted.replace('m', dateArray[1]);
    dateFormatted = dateFormatted.replace('y', dateArray[2]);
    return dateFormatted;
  }

  getDateWith(dateWithoutFormat) {
    const formatDate = dateWithoutFormat.split('-').reverse().join('-');
    return new Date(formatDate);
  }

  getFirstDayWeek() {
    const month = this.today.getMonth() + 1;
    const year = this.today.getFullYear();
    const first = this.today.getDate() - this.today.getDay() + 1;
    return `${first}-${month}-${year}`;
  }

  getLastDayWeek() {
    let month = this.today.getMonth() + 1;
    const year = this.today.getFullYear();
    const todayDay = this.today.getDate();

    const dayOfMonths = this.getDayOfMoths();
    const daysOfThisMonth = dayOfMonths[month];
    const day = (todayDay + 6) % daysOfThisMonth;

    if (day < todayDay) {
      month += 1;
    }

    return `${day}-${month}-${year}`;
  }
}

export { DateManager };
