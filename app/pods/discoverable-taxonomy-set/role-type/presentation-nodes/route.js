import Ember from 'ember';

const { isBlank } = Ember;

export default Ember.Route.extend({
  model() {
    return this.modelFor('discoverable-taxonomy-set.role-type').get('presentationNodes');
  },

  setupController(controller, model) {
    this._super(...arguments);
    controller.set('rootNodes', model.filter((node) => isBlank(node.get('parent.id'))));
  },

  afterModel(model) {
    this.controllerFor('application').set('searchScope', model)
  }
});
