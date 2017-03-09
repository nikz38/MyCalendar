import Ember from 'ember';

export function formatEventTime(params/*, hash*/) {
  return moment(params[0]).format("HH:mm");
}

export default Ember.Helper.helper(formatEventTime);
