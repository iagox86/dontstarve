import DS from 'ember-data';

export default DS.Model.extend({
  Exp: DS.attr(),
  Name: DS.attr(),
  Effect: DS.attr(),
  Health: DS.attr(),
  Hunger: DS.attr(),
  Sanity: DS.attr(),
  Spoil: DS.attr(),
  Cook: DS.attr(),
  Recipe: DS.attr()
});
