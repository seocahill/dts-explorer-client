import { moduleFor, test } from 'ember-qunit';

moduleFor('route:index', 'Unit | Route | index', {
  needs: ['controller:application']
});

test('it sets the search scope', function(assert) {
  let mock = { name: "test" };
  let route = this.subject();
  route.afterModel(mock);
  assert.equal(route.controllerFor('application').get('searchScope'), mock);
});
