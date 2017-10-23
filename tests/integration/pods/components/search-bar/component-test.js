import EmberObject from '@ember/object';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('search-bar', 'Integration | Component | search bar', {
  integration: true
});

const stubResults = [
  EmberObject.create({ name: 'result 1' }),
  EmberObject.create({ name: 'result 2' })
];

test('query is blank return empty results array', function(assert) {
  this.set('searchScope', stubResults);

  this.set('dummyAction', (results) => {
    assert.equal(results, [], 'returns empty array to parent controller');
  });

  this.render(hbs`{{search-bar searchScope=searchScope results=(action dummyAction)}}`);

  this.$('input').trigger('keyup');
});

// test('should return matching results to external action correctly', function (assert) {
//   assert.expect(1);

//   this.set('searchScope', stubResults);

//   this.set('dummyAction', (results) => {
//     const expectedModel = stubResults[0];
//     assert.deepEqual(results[0], expectedModel, 'submitted model arg is passed to external action');
//   });

//   this.render(hbs`{{search-bar searchScope=searchScope results=(action dummyAction)}}`);
//   this.$('input').val('result 1');
//   this.$('input').trigger('keyup');
// });