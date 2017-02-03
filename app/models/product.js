import DS from 'ember-data';

export default DS.Model.extend({
  name:        DS.attr(),
  description: DS.attr(),
  image:       DS.attr(),
  price:       DS.attr('number')
});
