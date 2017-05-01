import Ember from 'ember';

export default Ember.Component.extend({

  results: Ember.computed('query', function() {
    const query = this.get('query')
    if (Ember.isBlank(query)) {
      return [];
    }
    return this.get('searchScope').filter((item) => {
      return item.get('name').toLowerCase().search(query.toLowerCase()) !== -1;
    });
  }),

  didReceiveAttrs() {
    console.log("scope is", this.get('searchScope'));
  }
});
