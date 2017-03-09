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
        id: 4,
        type: 'events',
        date: '2017-03-23T00:00:00.000Z',
        title: 'Event title 3',
        description: 'Event description 3'
      }]);
    }

    let events = JSON.parse(localStorage.events);

    return Ember.RSVP.hash({
      events: events,
      activeEvents: []
    });
  },
});
