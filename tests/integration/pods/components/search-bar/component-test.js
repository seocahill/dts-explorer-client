import { moduleForComponent, test } from 'ember-qunit';
import wait from 'ember-test-helpers/wait';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('search-bar', 'Integration | Component | search bar', {
  integration: true
});

const stubResults = [
  Ember.Object.create({ name: 'result 1' }),
  Ember.Object.create({ name: 'result 2' })
];

test('should render results after typing a term', function (assert) {
  assert.expect(2);

  this.set('searchScope', stubResults);

  this.render(hbs`{{search-bar searchScope=searchScope}}`);
  this.$('input').val('res');
  this.$('input').trigger('keyup');

  return wait().then(() => {
    assert.equal(this.$('a').length, 2, 'two results rendered');
    assert.equal(this.$('a:first').text(), 'result 1', 'show result name');
  });
});