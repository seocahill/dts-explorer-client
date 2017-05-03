import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import wait from 'ember-test-helpers/wait';
import Ember from 'ember';

moduleForComponent('search-bar', 'Integration | Component | search bar', {
  integration: true
});

test('it renders', function(assert) {

  const model = Ember.Object.create({name: "test"})
  this.set('searchScope', [model])

  this.render(hbs`{{search-bar searchScope=searchScope}}`);
  this.$('input').val('test');
  this.$('input').trigger('keyup');

  return wait().then(() => {
    assert.equal(this.$('input').text().trim(), '');
  });
});
