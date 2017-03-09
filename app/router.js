import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('calendar');
  this.route('event', { path: '/event/:id' });
});

export default Router;
