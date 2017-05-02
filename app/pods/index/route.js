import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('discoverable-taxonomy-set');
  },

  afterModel(model) {
    this.controllerFor('application').set('searchScope', model);
  } 
});
