export default function () {
  this.namespace = '/api';

  this.get('/events', function () {
    return {
      data: [{
        type: 'events',
        id: 'event1',
        attributes: {
          title: 'Event title 1',
          description: 'Event description 1',
          timestamp: ''
        }
      }, {
          type: 'events',
          id: 'event2',
          attributes: {
            title: 'Event title 2',
            description: 'Event description 2',
            timestamp: ''
          }
      }]
    };
  });

}

// These comments are here to help you get started. Feel free to delete them.

/*
 Config (with defaults).

 Note: these only affect routes defined *after* them!
 */

// this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
// this.namespace = '';    // make this `/api`, for example, if your API is namespaced
// this.timing = 400;      // delay for each request, automatically set to 0 during testing

/*
 Shorthand cheatsheet:

 this.get('/posts');
 this.post('/posts');
 this.get('/posts/:id');
 this.put('/posts/:id'); // or this.patch
 this.del('/posts/:id');

 http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
 */
