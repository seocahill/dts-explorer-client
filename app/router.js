import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('discoverable-taxonomy-sets');
  this.route('discoverable-taxonomy-set', {
    path: 'discoverable-taxonomy-sets/:dts_id'
  }, function() {
    this.route('role-type', {
      path: 'role-types/:role_type_id'
    }, function() {
      this.route('element', {
        path: 'element/:element_id'
      });
      this.route('presentation-nodes');
      this.route('presentation-node', {
        path: 'presentation-nodes/:presentation_node_id'
      });
    });
  });
});

export default Router;
