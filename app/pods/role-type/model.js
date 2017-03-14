import DS from 'ember-data';

export default DS.Model.extend({
  discoverableTaxonomySet: DS.belongsTo('discoverable-taxonomy-set'),
  
  definition: DS.attr('string')
});
