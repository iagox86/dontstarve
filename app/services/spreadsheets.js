import Ember from 'ember';
import Tabletop from 'tabletop';

var spreadsheet = "https://docs.google.com/spreadsheets/d/111TqWMw58OLAjNWdi9VWEPfv8WRSPRJmcXMjbdUgNBc/pubhtml";

export default Ember.Service.extend({
  fetch: function(worksheet) {
    var promise = new Ember.RSVP.Promise(function(resolve) {
      Tabletop.init({
        key: spreadsheet,
        callback: function(data) {
          /* Add an id value equal to the index, since the spreadsheets don't have an id. */
          data[worksheet].elements.map(function(item, index, obj) {
            item.id = index;
          })
          resolve(data[worksheet].elements);
        }
      });
    });

    return promise;
  }
});
