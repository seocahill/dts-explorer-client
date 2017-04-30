import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    console.log("called", params.presentation_node_id)
    return this.get('store').findRecord('presentation-node', params.presentation_node_id)
  }
});
