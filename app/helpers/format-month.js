import Ember from 'ember';

export function formatMonth(params/*, hash*/) {
  console.log(params);
  return moment(params[0]).format("MMMM YYYY");
}

export default Ember.Helper.helper(formatMonth);
