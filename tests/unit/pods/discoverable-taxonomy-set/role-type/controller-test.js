import EmberObject from '@ember/object';
import { run } from '@ember/runloop';
import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:discoverable-taxonomy-set/role-type', 'Unit | Controller | discoverable taxonomy set/role type', {
});

test('should return root nodes', function (assert) {
  assert.expect(1);
  const ctrl = this.subject();

  run(function () {
    const collection = [EmberObject.create({ parent: {} }), EmberObject.create({ parent: { id: '1' } })]
    ctrl.set('model', { presentationNodes: collection });
    assert.equal(ctrl.get('rootNodes.length'), 1, 'only records with no parent are returned');
  });
});
