import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('dimension-node', 'Unit | Model | dimension node', {
  needs: ['model:element', 'model:role-type']
});

test('belongs to element', function(assert) {
  const DimensionNode = this.store().modelFor('dimension-node');
  const relationship = Ember.get(DimensionNode, 'relationshipsByName').get('element');

  assert.equal(relationship.key, 'element', 'has relationship with element');
  assert.equal(relationship.kind, 'belongsTo', 'kind of relationship is belongsTo');
});

test('belongs to role-type', function (assert) {
  const DimensionNode = this.store().modelFor('dimension-node');
  const relationship = Ember.get(DimensionNode, 'relationshipsByName').get('roleType');

  assert.equal(relationship.key, 'roleType', 'has relationship with role-type');
  assert.equal(relationship.kind, 'belongsTo', 'kind of relationship is belongsTo');
});
