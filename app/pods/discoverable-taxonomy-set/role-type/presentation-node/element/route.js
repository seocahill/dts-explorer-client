import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findRecord('element', params.element_id, {
      include: 'dimensionNodes.children'
    });
  }
});