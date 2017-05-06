/* global server */

import { test } from 'qunit';
import moduleForAcceptance from 'dts-explorer/tests/helpers/module-for-acceptance';
import testSelector from 'ember-test-selectors';

moduleForAcceptance('Acceptance | browse name entity officer', {
  afterEach() {
    if (server !== undefined) { server.shutdown(); }
  }
});

test('navigate menu tree to view entity officer element properties and return via parent links', function(assert) {
  server.loadFixtures();

  visit('/');
  andThen(() => assert.equal(find('h1').text(), 'XBRL DTS Explorer'));

  click('li > a:contains("UK-GAAP")');
  andThen(() => assert.equal(find('h2').text(), 'UK-GAAP'));

  click('li > a:contains("Entity Information")');
  andThen(() => assert.equal(find('h3').text(), '01 - Entity Information'));

  click('a:contains("EntityInformationHeading")');
  andThen(() => assert.equal(find('h4').text(), 'Child nodes'));

  click('a:contains("EntityOfficersHeading")');
  andThen(() => {
    assert.equal(find(testSelector('element-properties')).text(), 'EntityOfficersHeading');
    assert.equal(find('[data-test-child-nodes-nav] > a').length, 3)
  });

  click('a:contains("NameEntityOfficer")');
  andThen(() => assert.equal(find(testSelector('element-properties')).text(), 'NameEntityOfficer'));

  click('a:contains("NameEntityOfficer")');
  andThen(() => {
    assert.equal(find(testSelector('element', 'name')).text(), "name NameEntityOfficer");
    assert.equal(find(testSelector('element', 'type')).text(), "type xbrli:stringItemType");
    assert.equal(find(testSelector('element', 'periodType')).text(), "periodType duration");
    assert.equal(find(testSelector('element', 'substitutionGroup')).text(), "substitutionGroup xbrli:item");
    assert.equal(find(testSelector('element', 'nillable')).text(), "nillable true");
  });

  click('a:contains("close")');
  andThen(() => findWithAssert(testSelector('child-nodes-nav')));

  click('a:contains("parent")');
  andThen(() => assert.equal(find(testSelector('element-properties')).text(), 'EntityOfficersHeading'));

  click('a:contains("01 - Entity Information")');
  andThen(() => assert.equal(find('nav > a').text(), 'EntityInformationHeading'));

  click('a:contains("UK-GAAP")');
  andThen(() => {
    assert.equal(find('h2').text(), 'UK-GAAP')
    assert.equal(find('[data-test-role-types-menu] > li').length, 18)
  });

  click('a:contains("XBRL DTS Explorer")');
  andThen(() => {
    assert.equal(find('h1').text(), 'XBRL DTS Explorer')
    assert.equal(find('[data-test-dts-menu] > li').length, 4)
  });
});
