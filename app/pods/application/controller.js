import Controller from '@ember/controller';

export default Controller.extend({
  searchScope: "global",

  actions: {
    navigateToResult(path, model) {
      this.transitionToRoute(path, model);
    }
  }
});