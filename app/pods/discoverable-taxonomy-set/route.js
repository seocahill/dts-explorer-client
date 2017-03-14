import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('discoverable-taxonomy-set', params.dts_id);
  }
});
