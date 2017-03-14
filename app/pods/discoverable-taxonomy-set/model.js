import DS from 'ember-data';

export default DS.Model.extend({
  roleTypes: DS.hasMany('role-type'),
  
  name: DS.attr('string')
});
