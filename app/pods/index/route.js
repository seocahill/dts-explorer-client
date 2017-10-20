import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll('discoverable-taxonomy-set');
  },

  afterModel(model) {
    this.controllerFor('application').set('searchScope', model);
  } 
});
