import DS from 'ember-data';

export default DS.Model.extend({
  discoverableTaxonomySet: DS.belongsTo('discoverable-taxonomy-set'),
  presentationNodes: DS.hasMany('presentation-node'),
  
  definition: DS.attr('string')
});
