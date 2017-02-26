import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('recipe').then(function(recipes) {
      return recipes.map(function(recipe) {
        console.log(recipe.Name);
        recipe.set('Name', recipe.get('Name') + '!');
        return recipe;
      });
    });
  }
});
