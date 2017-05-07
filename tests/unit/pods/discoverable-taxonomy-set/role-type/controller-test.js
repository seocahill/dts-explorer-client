import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

moduleFor('controller:discoverable-taxonomy-set/role-type', 'Unit | Controller | discoverable taxonomy set/role type', {
});

test('should return root nodes', function (assert) {
  assert.expect(1);
  const ctrl = this.subject();

  Ember.run(function () {
    const collection = [Ember.Object.create({ parent: {} }), Ember.Object.create({ parent: { id: '1' } })]
    ctrl.set('model', { presentationNodes: collection });
    assert.equal(ctrl.get('rootNodes.length'), 1, 'only records with no parent are returned');
  });
});
