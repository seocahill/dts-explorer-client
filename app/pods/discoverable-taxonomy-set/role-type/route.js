import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('role-type', params.role_type_id)
  },

  afterModel(model) {
    this.controllerFor('application').set('searchScope', model);
  }
});
