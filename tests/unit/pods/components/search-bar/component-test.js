import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

moduleForComponent('search-bar', 'Unit | Component | search bar', {
  integration: false
});

test('correct search path is returned', function(assert) {
  assert.expect(3);
  let model = [Ember.Object.create({ constructor: { modelName: 'role-type' } })];
  this.subject().set('searchScope', model);
  assert.equal(this.subject().get('searchPath'), 'discoverable-taxonomy-set.role-type');

  model = [Ember.Object.create({ constructor: { modelName: 'presentation-node' } })];
  this.subject().set('searchScope', model);
  assert.equal(this.subject().get('searchPath'), 'discoverable-taxonomy-set.role-type.presentation-node');

  model = [Ember.Object.create({ constructor: { modelName: 'discoverable-taxonomy-set' } })];
  this.subject().set('searchScope', model);
  assert.equal(this.subject().get('searchPath'), 'discoverable-taxonomy-set');
});

