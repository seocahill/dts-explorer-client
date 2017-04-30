import Ember from 'ember';

const { isBlank } = Ember;

export default Ember.Route.extend({
  model(params) {
    return this.store.findAll('presentation-node');
  },

  setupController(controller, model) {
    this._super(...arguments);
    controller.set('rootNodes', model.filter((node) => isBlank(node.get('parent.id'))));
  }
});
