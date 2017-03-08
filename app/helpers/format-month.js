import Ember from 'ember';

export function formatMonth(params/*, hash*/) {
  return moment(params[0]).format("MMMM YYYY");
}

export default Ember.Helper.helper(formatMonth);
