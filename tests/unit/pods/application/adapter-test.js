import { moduleFor, test } from 'ember-qunit';

moduleFor('adapter:application', 'Unit | Adapter | application', {
});

test('coalesceFindRequests are true', function(assert) {
  let adapter = this.subject();
  assert.ok(adapter.get('coalesceFindRequests'));
});
