import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.resource('products', {path: '/'}, function(){
    this.resource('product', {path: '/:id'});
  });
});

export default Router;
