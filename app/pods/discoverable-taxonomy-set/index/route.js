import Ember from 'ember';

export default Ember.Route.extend({
  afterModel(model) {
    this.controllerFor('application').set('searchScope', model.get('roleTypes'));
  } 
});
