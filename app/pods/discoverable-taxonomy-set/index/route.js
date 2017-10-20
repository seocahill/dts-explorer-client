import Route from '@ember/routing/route';

export default Route.extend({
  afterModel(model) {
    this.controllerFor('application').set('searchScope', model.get('roleTypes'));
  } 
});
