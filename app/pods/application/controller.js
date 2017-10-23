import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  router: service(),

  actions: {
    navigateToResult(model) {
      const path = this.get('router.currentRouteName');
      if (path === 'discoverable-taxonomy-set.index') {
        this.transitionToRoute('discoverable-taxonomy-set.role-type', model);
      } else if (path === 'discoverable-taxonomy-set.role-type.presentation-node.index') {
        this.transitionToRoute('discoverable-taxonomy-set.role-type.presentation-node', model);
      } else {
        this.transitionToRoute('discoverable-taxonomy-set', model);
      }
      this.set('searchResults', null);
    }
  }
});