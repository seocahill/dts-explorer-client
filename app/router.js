import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('discoverable-taxonomy-sets');
  this.route('discoverable-taxonomy-set', {
    path: 'discoverable-taxonomy-sets/:id'
  });
});

export default Router;
