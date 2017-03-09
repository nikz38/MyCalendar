import Ember from 'ember';

export function formatDay(params/*, hash*/) {
  return moment(params[0]).format("D");
}

export default Ember.Helper.helper(formatDay);
