import Ember from 'ember';

export default Ember.Component.extend({

  init() {
    this._super();
    this.events = this.get('events');
    this.activeEvents = this.get('activeEvents');
  },

  actions: {
    deleteEvent(event) {
      let activeEvents = this.activeEvents;
      let events = this.events;
      let activeEvent = event;

      for (var i = 0; i < activeEvents.length; i++) {
        var event = activeEvents[i];
        if (activeEvent.id == event.id) {
          activeEvents.splice(i,1);
        }
      }

      for (var i = 0; i < events.length; i++) {
        var event = events[i];
        if (activeEvent.id == event.id) {
          events.splice(i,1);
        }
      }


      this.set('events', events);
      this.set('activeEvents', activeEvents);
    }
  }

});
