import Ember from 'ember';
import DS from 'ember-data';

export default DS.Adapter.extend({
  spreadsheets: Ember.inject.service(),

  findAll: function(store, type) {
    var worksheet = Ember.String.pluralize(type.modelName);
    return this.get('spreadsheets').fetch(worksheet);
  },

  findRecord: function(store, type, id) {
    return this.findAll(store, type).then(function(data) {
      return data.find(function(datum) {
        return datum.Name.toLowerCase() === id;
      });
    });
  },

  findQuery: function() { throw('not supported'); },
  createRecord: function() { throw('not supported'); },
  updateRecord: function() { throw('not supported'); },
  deleteRecord: function() { throw('not supported'); }
});
