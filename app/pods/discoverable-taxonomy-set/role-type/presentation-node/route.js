import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.get('store').findRecord('presentation-node', params.presentation_node_id)
  },

  afterModel(model) {
    this.controllerFor('application').set('searchScope', model.descendents());
    if (model.get('children.length') === 0) {
      this.replaceWith('discoverable-taxonomy-set.role-type.presentation-node.element', model.get('element'));
    }
  }
});
