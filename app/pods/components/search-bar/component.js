import Ember from 'ember';

export default Ember.Component.extend({
  query: null,
  results: [],

  didReceiveAttrs() {
    this._super(...arguments);
    this.set('query', null);
  },

  searchPath: Ember.computed('searchScope.[]', function() {
    const modelName = this.get('searchScope.firstObject.constructor.modelName');
    if (modelName === 'role-type') {
      return 'discoverable-taxonomy-set.role-type'
    } else if (modelName === 'presentation-node') {
      return 'discoverable-taxonomy-set.role-type.presentation-node'
    } else {
      return 'discoverable-taxonomy-set'
    }
  }),

  _filterModel() {
    const query = this.get('query');
    if (Ember.isBlank(query)) {
      return;
    }
    const results = this.get('searchScope').filter((item) => {
      return item.get('name').toLowerCase().search(query.toLowerCase()) !== -1;
    });
    this.set('results', results);
  },

  actions: {
    filterModel() {
      Ember.run.debounce(this, this._filterModel, 500)
    },

    handleClick(model) {
      this.get('navigateToResult')(this.get('searchPath'), model);
      this.setProperties({results: [], query: null});
    }
  }
});
