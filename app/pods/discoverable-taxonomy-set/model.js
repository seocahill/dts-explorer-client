import DS from 'ember-data';
import { sort } from '@ember/object/computed';

export default DS.Model.extend({
  roleTypes: DS.hasMany('role-type'),
  
  name: DS.attr('string'),

  roleSorting: ['number'],
  sortedRoleTypes: sort('roleTypes', 'roleSorting')
});
