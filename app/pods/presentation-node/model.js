import DS from 'ember-data';

export default DS.Model.extend({
  element: DS.belongsTo('element'),
  children: DS.hasMany('presentation-node'),
  parent: DS.belongsTo('presentation-node'),
  roleType: DS.belongsTo('role-type'),
  order: DS.attr('number')
});
