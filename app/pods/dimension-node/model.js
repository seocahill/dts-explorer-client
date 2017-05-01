import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  element: DS.belongsTo('element'),
  roleType: DS.belongsTo('role-type'),
  children: DS.hasMany('dimension-node', { inverse: 'parent' }),
  parent: DS.belongsTo('dimension-node', { inverse: 'children' }),
  order: DS.attr('number'),
  arcrole: DS.attr('string'),

  shortArcrole: Ember.computed('arcrole', function() {
    return this.get('arcrole').split('/').get('lastObject')
  })
});
