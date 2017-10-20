import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findRecord('discoverable-taxonomy-set', params.dts_id);
  }
});
