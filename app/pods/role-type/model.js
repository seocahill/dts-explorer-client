import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  discoverableTaxonomySet: DS.belongsTo('discoverable-taxonomy-set'),
  presentationNodes: DS.hasMany('presentation-node'),
  dimensionNodes: DS.hasMany('dimension-node'),
  
  definition: DS.attr('string'),

  name: Ember.computed.alias('definition')
});
