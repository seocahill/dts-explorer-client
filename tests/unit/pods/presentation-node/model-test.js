import { run } from '@ember/runloop';
import { get } from '@ember/object';
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('presentation-node', 'Unit | Model | presentation node', {
  needs: ['model:element', 'model:role-type', 'model:dimension-node']
});

test('belongs to element', function (assert) {
  const presentationNode = this.store().modelFor('presentation-node');
  const relationship = get(presentationNode, 'relationshipsByName').get('element');

  assert.equal(relationship.key, 'element', 'has relationship with presentation node');
  assert.equal(relationship.kind, 'belongsTo', 'kind of relationship is belongs to');
});

test('belongs to role type', function (assert) {
  const presentationNode = this.store().modelFor('presentation-node');
  const relationship = get(presentationNode, 'relationshipsByName').get('roleType');

  assert.equal(relationship.key, 'roleType', 'has relationship with presentation node');
  assert.equal(relationship.kind, 'belongsTo', 'kind of relationship is belongs to');
});

test('belongs to parent', function (assert) {
  const presentationNode = this.store().modelFor('presentation-node');
  const relationship = get(presentationNode, 'relationshipsByName').get('parent');

  assert.equal(relationship.key, 'parent', 'has relationship with presentation node');
  assert.equal(relationship.kind, 'belongsTo', 'kind of relationship is belongs to');
});

test('has many children', function (assert) {
  const presentationNode = this.store().modelFor('presentation-node');
  const relationship = get(presentationNode, 'relationshipsByName').get('children');

  assert.equal(relationship.key, 'children', 'has relationship with presentation node');
  assert.equal(relationship.kind, 'hasMany', 'kind of relationship is has many');
});

test('element name', function(assert) {
  const element = run(() => {
    return this.store().createRecord('element', {name: 'test'});
  });
  const node = this.subject({element: element});
  assert.equal(node.get('name'), 'test', 'alias element name');
});

test('descendents', function(assert) {
  const grandParent = this.subject({});
  run(() => {
    const parent = this.store().createRecord('presentation-node', { parent: grandParent });
    const child = this.store().createRecord('presentation-node', { parent: parent });
    const grandChild = this.store().createRecord('presentation-node', { parent: child });
    assert.equal(grandChild.descendents().length, 0, 'should return 0 if no children');
    assert.equal(grandParent.descendents().length, 3, 'should recursively find all descendent models');
  })
});