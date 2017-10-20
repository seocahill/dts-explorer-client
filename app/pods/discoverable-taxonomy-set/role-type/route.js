import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findRecord('role-type', params.role_type_id)
  },

  afterModel(model) {
    this.controllerFor('application').set('searchScope', model);
  }
});
