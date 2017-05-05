/* global server  */
import { test } from 'qunit';
import moduleForAcceptance from 'dts-explorer/tests/helpers/module-for-acceptance';
import testSelector from 'ember-test-selectors';

moduleForAcceptance('Acceptance | search NameThirdPartyAgent element and view dimensions');

test('visiting /', function(assert) {
  server.loadFixtures();
  visit('/discoverable-taxonomy-sets/1/role-types/1');
  andThen(() => assert.equal(currentURL(), '/discoverable-taxonomy-sets/1/role-types/1/presentation-nodes'));

  // search-for helper
  fillIn(testSelector('search-input'), "name");
  triggerEvent(testSelector('search-input'), 'keyup');
  click('a:contains("NameThirdPartyAgent")');
  andThen(() => assert.equal(find(testSelector('element-properties')).text(), 'NameThirdPartyAgent'));
  // return pauseTest()
  
});
