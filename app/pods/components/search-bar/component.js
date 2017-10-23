import { debounce } from '@ember/runloop';
import { isPresent } from '@ember/utils';
import Component from '@ember/component';

export default Component.extend({
  query: null,

  didReceiveAttrs() {
    this._super(...arguments);
    this.set('query', null);
  },

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
