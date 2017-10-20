import Route from '@ember/routing/route';

export default Route.extend({
  afterModel() {
    this.replaceWith('discoverable-taxonomy-set.role-type.presentation-nodes');
  }
});
