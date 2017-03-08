import DS from 'ember-data';

export default DS.Model.extend({
  time: DS.attr(),
  title: DS.attr(),
  description: DS.attr()
});
