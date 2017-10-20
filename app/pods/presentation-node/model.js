import { isPresent } from '@ember/utils';
import { alias } from '@ember/object/computed';
import DS from 'ember-data';

export default DS.Model.extend({
  element: DS.belongsTo('element'),
  children: DS.hasMany('presentation-node', { inverse: 'parent' }),
  parent: DS.belongsTo('presentation-node', { inverse: 'children' }),
  roleType: DS.belongsTo('role-type'),
  order: DS.attr('number'),

  name: alias('element.name'),

  descendents() {
    return this.get('children').reduce((previous, current) => {
      previous.addObject(current);
      if (isPresent(current.get('children'))) {
        previous.addObjects(current.descendents());
      }
      return previous;
    }, []);
  }
});
