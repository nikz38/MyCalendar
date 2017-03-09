import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    if (!localStorage.events) {
      localStorage.events = JSON.stringify([{
        id: 1,
        type: 'events',
        date: '2017-03-01T00:00:00.000Z',
        title: 'Event title 1',
        description: 'Event description 1',
      }, {
        id: 2,
        type: 'events',
        date: '2017-03-07T00:00:00.000Z',
        title: 'Event title 2',
        description: 'Event description 2'
      }, {
        id: 3,
        type: 'events',
        date: '2017-03-08T00:00:00.000Z',
        title: 'Event title 3',
        description: 'Event description 3'

      }, {
        id: 4,
        type: 'events',
        date: '2017-03-08T00:00:00.000Z',
        title: 'Event title 4',
        description: 'Event description 4'
      }]);
    }

    let events = JSON.parse(localStorage.events);

    return Ember.RSVP.hash({
      events: events,
      activeEvents: []
    });

    //   return this.get('store').findAll('event');
  },

  actions: {
    complete: function() {
      console.log('dadsa');
    }
  }

});
