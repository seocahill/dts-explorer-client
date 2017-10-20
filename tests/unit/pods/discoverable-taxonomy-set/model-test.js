import { get } from '@ember/object';
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('discoverable-taxonomy-set', 'Unit | Model | discoverable taxonomy set', {
  needs: ['model:role-type', 'model:presentation-node']
});

test('has many role types', function (assert) {
  const DTS = this.store().modelFor('discoverable-taxonomy-set');
  const relationship = get(DTS, 'relationshipsByName').get('roleTypes');

  assert.equal(relationship.key, 'roleTypes', 'has relationship with roleType');
  assert.equal(relationship.kind, 'hasMany', 'kind of relationship is hasMany');
});
