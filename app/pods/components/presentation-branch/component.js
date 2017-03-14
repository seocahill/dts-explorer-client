import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  showChildren: false,

  actions: {
    toggleShowChildren() {
      this.toggleProperty('showChildren');
    }
  }
});
