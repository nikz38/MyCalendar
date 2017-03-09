import Ember from 'ember';

export default Ember.Component.extend({
  weekDays: moment.weekdaysShort(),
  selectedDate: moment(),
  counter: 0,
  events: [],
  classNameBindings: "active-day",
  activeDay: false,

  init() {
    this._super();
    this.events = this.get('events');
    this.activeEvents = this.get('activeEvents');
    this.createCalendarMonth();
    this.loadEvents();
  },

  createCalendarMonth() {
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

  loadEvents() {
    this.events.forEach(function (event) {
      event.date = moment(event.date);
    });
    this.addEventsToCalendar();
  },

  addEventsToCalendar() {
    for (let i = 0; i < this.days.length; i++) {
      let day = this.days[i];
      for (let j = 0; j < this.events.length; j++) {
        let event = this.events[j];
        if (day.date.format('YYYY-MM-DD') == moment(event.date).format('YYYY-MM-DD')) {
          if (!day.event) day.event = [];
          day.event.push(event);
        }
      }
    }
  },

  actions: {
    calendarLeft() {
      this.counter -= 1;
      this.set('selectedDate', moment().add(this.counter, 'month'));
      this.createCalendarMonth();
      this.addEventsToCalendar();
      this.set('activeEvents', []);
    },

    calendarRight() {
      this.counter += 1;
      this.set('selectedDate', moment().add(this.counter, 'month'));
      this.createCalendarMonth();
      this.addEventsToCalendar();
      this.set('activeEvents', []);
    },

    setActiveEvents(day) {
      for (let i = 0; i < this.days.length; i++) {
        let day = this.days[i];
        day.selectedDay = false;
      }
      if (day.selectedMonth) {
        day.selectedDay = true;
        this.set('activeEvents', day.event);
      }
      this.rerender();
    }
  }

});
