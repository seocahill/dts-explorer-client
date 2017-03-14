import DS from 'ember-data';

export default DS.Model.extend({
  element: DS.belongsTo('element'),
  children: DS.hasMany('presentation-node', { inverse: 'parent' }),
  parent: DS.belongsTo('presentation-node', { inverse: 'children' }),
  roleType: DS.belongsTo('role-type'),
  order: DS.attr('number')
});
