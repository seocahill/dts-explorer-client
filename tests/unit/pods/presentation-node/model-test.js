import { moduleForModel, test } from 'ember-qunit';

moduleForModel('presentation-node', 'Unit | Model | presentation node', {
  // Specify the other units that are required for this test.
  needs: ['model:element', 'model:role-type']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
