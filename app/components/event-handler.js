import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    save() {
      let events = JSON.parse(localStorage.events);
      let activeEvent = this.get('event');

      for (var i = 0; i < events.length; i++) {
        let event = events[i];
        if (event.id == activeEvent.id) {
          event.title = activeEvent.title;
          event.description = activeEvent.description;
          event.date = activeEvent.date;

          localStorage.events = JSON.stringify(events);
          this.sendAction('backToCalendar');
        }
      }
    },
    add(event) {
      let id = 1;
      let events = JSON.parse(localStorage.events);

      for (var i = 0; i < events.length; i++) {
        let event = events[i];
        if (event.id >= id) {
          id = event.id + 1;
        }
      }

      this.event.id = id;
      events.push(this.event);

      localStorage.events = JSON.stringify(events);
      this.sendAction('backToCalendar');
    }
  }

});
