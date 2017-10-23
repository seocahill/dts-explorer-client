import { alias } from '@ember/object/computed';
import { computed } from '@ember/object';
import DS from 'ember-data';

export default DS.Model.extend({
  discoverableTaxonomySet: DS.belongsTo('discoverable-taxonomy-set'),
  presentationNodes: DS.hasMany('presentation-node'),
  dimensionNodes: DS.hasMany('dimension-node'),
  
  definition: DS.attr('string'),

  name: alias('definition'),

  number: computed('definition', function() {
    if (! this.get('definition')) {
      return;
    }
    return this.get('definition').match(/\d+/g).map(Number);
  })
});
