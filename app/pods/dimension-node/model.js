import { isPresent } from '@ember/utils';
import { computed } from '@ember/object';
import DS from 'ember-data';

export default DS.Model.extend({
  element: DS.belongsTo('element'),
  roleType: DS.belongsTo('role-type'),
  children: DS.hasMany('dimension-node', { inverse: 'parent' }),
  parent: DS.belongsTo('dimension-node', { inverse: 'children' }),
  order: DS.attr('number'),
  arcrole: DS.attr('string'),
  name: DS.attr('string'),

  // name: Ember.computed.alias('element.name'),

  dimensionType: computed('defaultDimension', function() {
    return this.get('defaultDimension') ?  " (has default)" : " (choice required)";
  }),

  shortArcrole: computed('arcrole', function() {
    return this.get('arcrole').split('/').get('lastObject');
  }),

  defaultDimension: computed(function() {
    const arcrole = this.get('shortArcrole');
    if (arcrole === 'all') {
      return this.get('children').every((child) => child._defaultDimension());
    } else if (arcrole === 'hypercube-dimension') {
      return this._defaultDimension();
    } else {
      return false;
    }
  }),

  _defaultDimension() {
    if (this.get('shortArcrole') === "dimension-default") {
      return true;
    }
    if (isPresent(this.get('children'))) {
      return this.get('children').any((child) => child._defaultDimension());
    }
    return false;
  }
});
