import Ember from 'ember';

export default Ember.Component.extend({
  query: null,

  didReceiveAttrs() {
    this._super(...arguments);
    this.set('query', null);
    const modelName = this.get('searchScope.firstObject._internalModel.modelName');
  },

  searchPath: Ember.computed('searchScope.[]', function() {
    const modelName = this.get('searchScope.firstObject._internalModel.modelName');
    if (modelName === 'role-type') {
      return 'discoverable-taxonomy-set.role-type'
    } else if (modelName === 'presentation-node') {
      return 'discoverable-taxonomy-set.role-type.presentation-node'
    } else {
      return 'discoverable-taxonomy-set'
    }
  }),

  results: Ember.computed('query', function() {
    const query = this.get('query')
    if (Ember.isBlank(query)) {
      return [];
    }
    return this.get('searchScope').filter((item) => {
      return item.get('name').toLowerCase().search(query.toLowerCase()) !== -1;
    });
  })
});
