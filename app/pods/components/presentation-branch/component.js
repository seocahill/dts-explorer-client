import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  showChildren: false,

  actions: {
    toggleShowChildren() {
      const element = this.get('node.element');
      this.attrs.viewElement(element);
      this.toggleProperty('showChildren');
    }
  }
});
