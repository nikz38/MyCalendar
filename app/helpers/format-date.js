import Ember from 'ember';

export function formatDate(params/*, hash*/) {
  console.log(params);
  return moment(params[0]).format("D");
}

export default Ember.Helper.helper(formatDate);
