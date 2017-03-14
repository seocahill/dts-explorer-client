import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({
  rootNodes: computed.filter('model.presentationNodes', function(node) {
    return node.get('parent.id') === undefined; 
  }),

  actions: {
    viewElement(element) {
      this.transitionToRoute('discoverable-taxonomy-set.role-type.element', element);
    }
  }
});
