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
      return data.findBy('id', id);
    });
  },

  findQuery: function(store, type, query) {
    return this.findAll(store, type).then(function(data) {
      return data.filter(function(datum){
        return Ember.keys(query).every(function(key){
          return datum[key] === query[key];
        });
      });
    });
  },

  createRecord: function() { throw('not supported'); },
  updateRecord: function() { throw('not supported'); },
  deleteRecord: function() { throw('not supported'); }
});
