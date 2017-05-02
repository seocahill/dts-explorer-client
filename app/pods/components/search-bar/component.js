import Ember from 'ember';

export default Ember.Component.extend({
  query: null,

  didReceiveAttrs() {
    this._super(...arguments);
    this.set('query', null);
  },

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
