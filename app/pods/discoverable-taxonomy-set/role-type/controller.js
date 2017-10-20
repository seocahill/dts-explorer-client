import { filter } from '@ember/object/computed';
import Controller from '@ember/controller';

export default Controller.extend({
  rootNodes: filter('model.presentationNodes', function(node) {
    return node.get('parent.id') === undefined; 
  })
});
