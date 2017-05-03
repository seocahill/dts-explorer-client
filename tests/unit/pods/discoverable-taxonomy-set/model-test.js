import { moduleForModel, test } from 'ember-qunit';

moduleForModel('discoverable-taxonomy-set', 'Unit | Model | discoverable taxonomy set', {
  // Specify the other units that are required for this test.
  needs: ['model:role-type', 'model:presentation-node']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
