import DS from 'ember-data';

export default DS.Model.extend({
  element: DS.belongsTo('element'),
  roleType: DS.belongsTo('role-type'),
  children: DS.hasMany('dimension-node', { inverse: 'parent' }),
  parent: DS.belongsTo('dimension-node', { inverse: 'children' }),
  order: DS.attr('number')
});
