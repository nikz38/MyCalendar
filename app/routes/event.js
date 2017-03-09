import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params){
    if (params.id == 0) {
      return Ember.RSVP.hash({
        event: {
          id: 0,
          title: '',
          description: '',
          date: new Date()
        },
        editMode: false,
        addMode: true
      });
    }

    let events = JSON.parse(localStorage.events);

    for (var i = 0; i < events.length; i++) {
      if (events[i].id == params.id) {
        return Ember.RSVP.hash({
          event: events[i],
          editMode: true,
          addMode: false
        });
      }
    }
  }

});
