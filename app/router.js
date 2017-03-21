import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('buildables', function() {
    this.route('buildable', { path: ':buildable_id' });
  });
});

export default Router;
