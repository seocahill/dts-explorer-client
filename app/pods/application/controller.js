import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  router: service(),

  actions: {
    navigateToResult(model) {
      const path = this.get('router.currentRouteName');
      if (path === 'discoverable-taxonomy-set') {
        this.transitionToRoute('discoverable-taxonomy-set.role-type', model);
      } else {
        alert("no path for ", path);
      }
    }
  }
});