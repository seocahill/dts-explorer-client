import EmberObject from '@ember/object';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import wait from 'ember-test-helpers/wait';

moduleForComponent('search-bar', 'Integration | Component | search bar', {
  integration: true
});

const stubResults = [
  EmberObject.create({ name: 'result 1' }),
  EmberObject.create({ name: 'result 2' })
];

test('should return matching results to external action correctly', function (assert) {
  assert.expect(1);

  this.set('searchScope', stubResults);
  this.set('results', null);
  this.render(hbs`{{search-bar searchScope=searchScope search=(action (mut results))}}`);
  this.$('input').val('result 1');
  this.$('input').trigger('keyup');
  return wait().then(() => {
    assert.deepEqual(stubResults[0], this.get('results.firstObject'), 'action is called');
  });
});