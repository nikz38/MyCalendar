import Ember from 'ember';

export default Ember.Component.extend({
  weekDays: moment.weekdaysShort(),
  selectedDate: moment(),

  didInsertElement() {
    this.createCalendarMonth();
  },

  createCalendarMonth() {
    let days = [];
    let year = this.selectedDate.format('YYYY');
    let month = this.selectedDate.format('MM');
    console.log(month);
    let daysInSelectedMonth = this.selectedDate.daysInMonth();

    // Add selected month days
    for (let i = 1; i <= daysInSelectedMonth; i++) {
      let day = {};
      day.date = moment(year + '-' + month + '-' + i, 'YYYY-MM-D');
      day.selectedMonth = true;
      days.push(day);
    }

    // Add previous month days
    while (days[0].date.day() != 0) {
      let firstDayDate = days[0].date.clone();
      let day = {};
      day.date = firstDayDate.subtract(1, 'day');
      day.selectedMonth = false;
      days.splice(0, 0, day);
    }

    // Add next month days
    while (days[days.length - 1].date.day() != 6) {
      let lastDayDate = days[days.length - 1].date.clone();
      let day = {};
      day.date = lastDayDate.add(1, 'day');
      day.selectedMonth = false;
      days.push(day);
    }

    this.set('days', days);

  },

  actions: {
    calendarLeft() {
      this.createCalendarMonth();
    },

    calendarRight() {
      let bbb = this.selectedDate.subtract(1, 'month');
      this.set('selectedDate', bbb);

      //console.log(this.selectedDate);

      this.createCalendarMonth();
    }
  }

});
