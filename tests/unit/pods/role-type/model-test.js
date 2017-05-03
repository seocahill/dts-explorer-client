import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('role-type', 'Unit | Model | role type', {
  needs: ['model:discoverable-taxonomy-set', 'model:presentation-node', 'model:dimension-node']
});

test('belongs to dts', function (assert) {
  const RoleType = this.store().modelFor('role-type');
  const relationship = Ember.get(RoleType, 'relationshipsByName').get('discoverableTaxonomySet');

  assert.equal(relationship.key, 'discoverableTaxonomySet', 'has relationship with RoleType');
  assert.equal(relationship.kind, 'belongsTo', 'kind of relationship is belongs to');
});

test('has many presentation nodes', function (assert) {
  const RoleType = this.store().modelFor('role-type');
  const relationship = Ember.get(RoleType, 'relationshipsByName').get('presentationNodes');

  assert.equal(relationship.key, 'presentationNodes', 'has relationship with RoleType');
  assert.equal(relationship.kind, 'hasMany', 'kind of relationship is belongs to');
});

test('has many dimension nodes', function (assert) {
  const RoleType = this.store().modelFor('role-type');
  const relationship = Ember.get(RoleType, 'relationshipsByName').get('dimensionNodes');

  assert.equal(relationship.key, 'dimensionNodes', 'has relationship with RoleType');
  assert.equal(relationship.kind, 'hasMany', 'kind of relationship is belongs to');
});

