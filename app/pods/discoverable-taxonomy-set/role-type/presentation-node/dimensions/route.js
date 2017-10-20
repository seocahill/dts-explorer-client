import Ember from 'ember';

const { isBlank } = Ember;

export default Ember.Route.extend({
  model() {
    return this.modelFor('discoverable-taxonomy-set.role-type.presentation-node').get('element.dimensionNodes');
  },

  setupController(controller, model) {
    this._super(...arguments);
    controller.set('rootNodes', model.filter((node) => node.get('arcrole') === "primary-item"));
  }
});
