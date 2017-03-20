import DS from 'ember-data';

export default DS.Model.extend({
  expansion: DS.attr(),
  period: DS.attr(),
  name: DS.attr(),
  type: DS.attr(),
  components: DS.attr(),
  tab: DS.attr(),
  health: DS.attr(),
  hunger: DS.attr(),
  sanity: DS.attr(),
  damage: DS.attr(),
  durability: DS.attr(),
  notes: DS.attr(),
});
