import Ember from 'ember';

export default Ember.Controller.extend({
  dimensionElement: null,

  rootDimensionNodes: Ember.computed.filter('model.dimensionNodes.[]', function(node) {
    return node.get('parent.id') === undefined;
  })
});