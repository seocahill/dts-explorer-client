import { debounce } from '@ember/runloop';
import { isPresent } from '@ember/utils';
import { computed } from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
  query: null,

  didReceiveAttrs() {
    this._super(...arguments);
    this.set('query', null);
  },

  searchPath: computed('searchScope.[]', function() {
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
    let results = [];
    if (isPresent(query)) {
      results = this.get('searchScope').filter((item) => {
        return item.get('name').toLowerCase().search(query.toLowerCase()) !== -1;
      });
    }
    this.get('search')(results);
  },

  actions: {
    filterModel() {
      debounce(this, this._filterModel, 500)
    }
  }
});
