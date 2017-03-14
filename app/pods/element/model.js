import DS from 'ember-data';

export default DS.Model.extend({
  prsentationNodes: DS.hasMany('presentation-node'),
  
  name: DS.attr('string'),
  type: DS.attr('string'),
  substitutionGroup: DS.attr('string'),
  periodType: DS.attr('string'),
  abstract: DS.attr('string'),
  nillable: DS.attr('string')
});
