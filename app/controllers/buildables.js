import Ember from 'ember';

export default Ember.Controller.extend({
  expansions: {
    dst: localStorage.getItem('expansions.dst') === 'true',
    rog: localStorage.getItem('expansions.rog') === 'true',
    sw: localStorage.getItem('expansions.sw') === 'true',
  },

  expansionChanged: function() {
    var expansions = this.get('expansions');
    for(var key in expansions) {
      if(expansions.hasOwnProperty(key)) {
        localStorage.setItem('expansions.' + key, expansions[key]);
      }
    }
  }.observes('expansions.dst', 'expansions.rog', 'expansions.sw'),

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
    let dst = this.get('expansions.dst');
    let rog = this.get('expansions.rog');
    let sw = this.get('expansions.sw');

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
  }.property('model', 'expansions.dst', 'expansions.rog', 'expansions.sw'),
});
