import Ember from 'ember';

export function formatEventDay(params/*, hash*/) {
  return moment(params[0]).format("MMMM Do YYYY");
}

export default Ember.Helper.helper(formatEventDay);
