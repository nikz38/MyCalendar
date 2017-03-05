import Ember from 'ember';

export default Ember.Component.extend({
  weekDays: moment.weekdaysShort(),
  selectedDate: moment(),

  didInsertElement() {

    let days = [];
    let year = this.selectedDate.format('YYYY');
    let month = this.selectedDate.format('MM');
    let daysInSelectedMonth = this.selectedDate.daysInMonth();

    // Add selected month days
    for (let i = 1; i <= daysInSelectedMonth; i++) {
      let day = {};
      day.date = moment(year + '-' + month + '-' + i, 'YYYY-MM-D');
      day.selectedMonth = true;
      days.push(day);
    }

    // Add previous month days
    while (days[0].date.format('d') != 0) {
      let firstDayDate = days[0].date.clone();
      let day = {};
      day.date = firstDayDate.subtract(1, 'day');
      day.selectedMonth = false;
      days.splice(0, 0, day);
    }

    // Add next month days
    while (days[days.length - 1].date.format('d') != 6) {
      let lastDayDate = days[days.length - 1].date.clone();
      let day = {};
      day.date = lastDayDate.add(1, 'day');
      day.selectedMonth = false;
      days.push(day);
    }

    console.log(days);

    this.set('days', days);
  }

});
