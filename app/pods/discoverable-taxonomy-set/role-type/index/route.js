import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    this.replaceWith('discoverable-taxonomy-set.role-type.presentation-nodes');
  }
});
