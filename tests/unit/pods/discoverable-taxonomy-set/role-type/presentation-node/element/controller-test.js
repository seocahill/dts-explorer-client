import EmberObject from '@ember/object';
import { run } from '@ember/runloop';
import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:discoverable-taxonomy-set/role-type/presentation-node/element', 'Unit | Controller | presentation node element controller', {
});

test('should return root nodes', function (assert) {
  assert.expect(1);
  const ctrl = this.subject();

  run(function () {
    const collection = [ EmberObject.create({ parent: {} }), EmberObject.create({ parent: { id: '1' } }) ]
    ctrl.set('model', { dimensionNodes: collection });
    assert.equal(ctrl.get('rootDimensionNodes.length'), 1, 'only records with no parent are returned');
  });
});
