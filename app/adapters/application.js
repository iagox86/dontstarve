import Ember from 'ember';
import DS from 'ember-data';

export default DS.Adapter.extend({
  spreadsheets: Ember.inject.service(),

  findAll: function(store, type) {
    var worksheet = Ember.String.pluralize(type.modelName);
    return this.get('spreadsheets').fetch(worksheet);
  },

  queryRecord: function(store, type, name) {
    return this.findAll(store, type).then(function(data) {
      return data.findBy('Name', name);
    });
  },

  findQuery: function() { throw('not supported'); },
  createRecord: function() { throw('not supported'); },
  updateRecord: function() { throw('not supported'); },
  deleteRecord: function() { throw('not supported'); }
});
