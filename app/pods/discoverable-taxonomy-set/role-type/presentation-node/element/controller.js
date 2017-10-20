import { filter } from '@ember/object/computed';
import Controller from '@ember/controller';

export default Controller.extend({
  dimensionElement: null,

  rootDimensionNodes: filter('model.dimensionNodes.[]', function(node) {
    return node.get('parent.id') === undefined;
  })
});