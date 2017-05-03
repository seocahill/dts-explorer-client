import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('element', 'Unit | Model | element', {
  needs: ['model:presentation-node', 'model:dimension-node']
});

test('has many presentation nodes', function (assert) {
  const Element = this.store().modelFor('element');
  const relationship = Ember.get(Element, 'relationshipsByName').get('presentationNodes');

  assert.equal(relationship.key, 'presentationNodes', 'has relationship with presentation node');
  assert.equal(relationship.kind, 'hasMany', 'kind of relationship is has many');
});

test('has many dimension nodes', function (assert) {
  const Element = this.store().modelFor('element');
  const relationship = Ember.get(Element, 'relationshipsByName').get('dimensionNodes');

  assert.equal(relationship.key, 'dimensionNodes', 'has relationship with dimension node');
  assert.equal(relationship.kind, 'hasMany', 'kind of relationship is has many');
});
