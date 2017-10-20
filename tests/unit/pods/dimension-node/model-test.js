import { run } from '@ember/runloop';
import { get } from '@ember/object';
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('dimension-node', 'Unit | Model | dimension node', {
  needs: ['model:element', 'model:role-type']
});

test('belongs to element', function(assert) {
  const DimensionNode = this.store().modelFor('dimension-node');
  const relationship = get(DimensionNode, 'relationshipsByName').get('element');

  assert.equal(relationship.key, 'element', 'has relationship with element');
  assert.equal(relationship.kind, 'belongsTo', 'kind of relationship is belongsTo');
});

test('belongs to role-type', function (assert) {
  const DimensionNode = this.store().modelFor('dimension-node');
  const relationship = get(DimensionNode, 'relationshipsByName').get('roleType');

  assert.equal(relationship.key, 'roleType', 'has relationship with role-type');
  assert.equal(relationship.kind, 'belongsTo', 'kind of relationship is belongsTo');
});

test('belongs to parent', function (assert) {
  const DimensionNode = this.store().modelFor('dimension-node');
  const relationship = get(DimensionNode, 'relationshipsByName').get('parent');

  assert.equal(relationship.key, 'parent', 'has relationship with parent');
  assert.equal(relationship.kind, 'belongsTo', 'kind of relationship is belongsTo');
  assert.equal(relationship.options.inverse, 'children', 'inverse of children');
});

test('has many children', function (assert) {
  const DimensionNode = this.store().modelFor('dimension-node');
  const relationship = get(DimensionNode, 'relationshipsByName').get('children');
  assert.equal(relationship.key, 'children', 'has relationship with children');
  assert.equal(relationship.kind, 'hasMany', 'kind of relationship is hasMany');
  assert.equal(relationship.options.inverse, 'parent', 'inverse of parent');
});

test('short arcrole', function(assert) {
  assert.expect(2);
  let node = this.subject({arcrole: "http://xbrl.org/hypercube-dimension"});
  assert.equal(node.get('shortArcrole'), 'hypercube-dimension', 'returns last part or url');
  run(() => node.set('arcrole', 'primary-item'));
  assert.equal(node.get('shortArcrole'), 'primary-item', 'should return when only one part to url');
});

test('defaultDimension true', function(assert) {
  let child = run(() => {
    return this.store().createRecord('dimension-node', { arcrole: 'dimension-default' });
  });
  let parent = this.subject({ children: [child], arcrole: "all" });
  assert.equal(parent.get('defaultDimension'), true, "should be true as child is default dimension")
});

test('defaultDimension false', function (assert) {
  const parent = this.subject({ arcrole: "all" });
  run(() => {
    const child1 = this.store().createRecord('dimension-node', { arcrole: 'dimension-default' });
    const child2 = this.store().createRecord('dimension-node', { arcrole: 'domain-member' });
    parent.get('children').pushObjects([child1, child2]);
  });
  assert.equal(parent.get('defaultDimension'), false, "should be false as all children are not default dimensions")
});

test('defaultDimension returns false when tree level is above hypercube', function (assert) {
  const parent = this.subject({ arcrole: "hypercube" });
  assert.equal(parent.get('defaultDimension'), false, "shoud return short arcrole")
});

test('dimensionType returns information to the user regarding necessity for choosing custom dimension', function (assert) {
  assert.expect(2);

  let node = this.subject();
  run(() => node.set('defaultDimension', false));
  assert.equal(node.get('dimensionType'), " (choice required)");

  run(() => node.set('defaultDimension', true));
  assert.equal(node.get('dimensionType'), " (has default)");
});
