import DS from 'ember-data';

export default DS.Model.extend({
  Exp: DS.attr(),
  Period: DS.attr(),
  Name: DS.attr(),
  Type: DS.attr()
});
