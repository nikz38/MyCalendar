import Ember from 'ember';

export default Ember.Component.extend({

  init() {
    this._super();
    this.events = this.get('events');
    this.activeEvents = this.get('activeEvents');
  },

  actions: {
    deleteEvent(event) {
      this.activeEvents.removeObject(event);
      this.events.removeObject(event);
      localStorage.events = JSON.stringify(this.events);
    }
  }

});
