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

test('query is blank return emptry results array', function(assert) {
  this.render(hbs`{{search-bar searchScope=searchScope}}`);
  this.$('input').trigger('keyup');
  return wait().then(() => {
    assert.equal(this.$('a').length, 0, 'no results');
  });
});

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

test('should handle result click correctly', function (assert) {
  assert.expect(4);

  this.set('searchScope', stubResults);

  this.set('dummyAction', (path, model) => {
    const expectedPath = 'discoverable-taxonomy-set';
    const expectedModel = stubResults[0];
    assert.equal(path, expectedPath, 'submitted path arg is passed to external action');
    assert.deepEqual(model, expectedModel, 'submitted model arg is passed to external action');
  });

  this.render(hbs`{{search-bar searchScope=searchScope navigateToResult=(action dummyAction)}}`);
  this.$('input').val('result 1');
  this.$('input').trigger('keyup');

  return wait().then(() => {
    this.$('a:contains("result 1")').click();
    assert.equal(this.$('input').val(), '', 'query reset');
    assert.equal(this.$('a').length, 0, 'results reset');
  });
});