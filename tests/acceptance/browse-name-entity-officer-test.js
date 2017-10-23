/* global server */

import { test } from 'qunit';
import moduleForAcceptance from 'dts-explorer/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | browse name entity officer', {
  afterEach() {
    if (server !== undefined) { server.shutdown(); }
  }
});

test('navigate menu tree to view entity officer element properties and return via parent links', function(assert) {
  server.loadFixtures();

  visit('/');
  andThen(() => assert.equal(find('h5').text(), 'Discoverable Taxonomy Sets'));

  click('li > a:contains("UK-GAAP")');
  andThen(() => assert.equal(find('h5').text(), 'UK-GAAP'));

  click('li > a:contains("Entity Information")');
  andThen(() => assert.equal(find('h5').text(), 'arrow_upward 01 - Entity Information'));

  click('a:contains("Entity information heading")');

  click('a:contains("Entity officers heading")');
  andThen(() => {
    assert.equal(find('[data-test-child-nodes-nav] > a').length, 3)
  });
  click('a:contains("Name entity officer")');
  andThen(() => assert.equal(find('[data-test-element-properties]').text(), 'details'));
  
  click('a:contains("details")');
  andThen(() => {
    assert.equal(find('[data-test-element="name"]').text(), "name: NameEntityOfficer");
    assert.equal(find('[data-test-element="type"]').text(), "type: xbrli:stringItemType");
    assert.equal(find('[data-test-element="periodType"]').text(), "periodType: duration");
    assert.equal(find('[data-test-element="substitutionGroup"]').text(), "substitutionGroup: xbrli:item");
    assert.equal(find('[data-test-element="nillable"]').text(), "nillable: true");
  });
  
  click('a:contains("close")');
  click('a:contains("arrow_upward")');
  click('a:contains("arrow_upward")');
  click('a:contains("arrow_upward")');
  andThen(() => assert.equal(find('nav > a:last').text(), 'Entity information heading'));

  click('a:contains("arrow_upward 01 - Entity Information")');
  andThen(() => {
    assert.equal(find('h5').text(), 'UK-GAAP')
    assert.equal(find('[data-test-role-types-menu] > li').length, 18)
  });

  click('a:contains("home")');
  andThen(() => {
    assert.equal(find('h5').text(), 'Discoverable Taxonomy Sets')
    assert.equal(find('[data-test-dts-menu] > li').length, 4)
  });
});
