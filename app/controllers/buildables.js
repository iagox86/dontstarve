import Ember from 'ember';

export default Ember.Controller.extend({
  dst: true,
  rog: true,
  sw: true,

  ingredients: function() {
    var ingredients = {};
    this.get('model').forEach(function(item) {
      item.get('components').forEach(function(component) {
        if(component['type'] === 'special') {
          return;
        }

        ingredients[component.item] = ingredients[component.item] ? ingredients[component.item] + 1 : 1;
      });
    });

    console.log(ingredients);
    return ingredients;
  }.property('model'),

  filtered_items: function() {
    let dst = this.get('dst');
    let rog = this.get('rog');
    let sw = this.get('sw');

    return this.get('model').filter(function(buildable) {
      if(buildable.get('expansion') === "Don't Starve Together") {
        return dst;
      } else if(buildable.get('expansion') === "Reign of Giants") {
        return rog;
      } else if(buildable.get('expansion') === "Shipwrecked") {
        return sw;
      }

      return true;
    });
  }.property('model', 'dst', 'rog', 'sw'),
});
