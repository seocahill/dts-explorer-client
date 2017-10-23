/* global server  */
import { test } from 'qunit';
import moduleForAcceptance from 'dts-explorer/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | search NameThirdPartyAgent element and view dimensions', {
  afterEach() {
    if (server !== undefined) { server.shutdown(); }
  }
});

test('search element with dimensions and drill down', function(assert) {
  server.loadFixtures();
  visit('/discoverable-taxonomy-sets/1/role-types/1');
  andThen(() => assert.equal(currentURL(), '/discoverable-taxonomy-sets/1/role-types/1/presentation-nodes'));
  click('a:contains("Entity information heading")');
  fillIn('[data-test-search-input]', "third");
  triggerEvent('[data-test-search-input]', 'keyup');
  click('a:contains("NameThirdPartyAgent")');
  andThen(() => assert.equal(find('h5').text(), 'Properties'));
  
  click('a:contains("Dimensions")');
  click('[data-test-dimension-nodes] > a:contains("NameThirdPartyAgent")');
  andThen(() => assert.equal(find('[data-test-dimension-nodes] > a:last').text(), 'Dimensions parent third party agents (choice required)'));
  click('[data-test-dimension-nodes] > a:last');
  andThen(() => assert.equal(find('[data-test-dimension-nodes] > a:last').text(), 'Third party agents hypercube (choice required)'));
  click('[data-test-dimension-nodes] > a:last');
  andThen(() => {
    assert.equal(find('[data-test-dimension-nodes] > a:nth(5)').text(), 'Third party agent type dimension (choice required)');
  });
  
  click('[data-test-dimension-nodes] > a:contains("Third party agent type dimension")');
  click('[data-test-dimension-nodes] > a:contains("Dimension members identifying type third party agent heading")');
  andThen(() => assert.equal(find('[data-test-dimension-nodes] > a').length, 9));

  click('[data-test-dimension-nodes] > a:contains("Entity bankers")');
  andThen(() => {
    assert.equal(find('[data-test-element="name"]').text(), "name: EntityBankers");
    assert.equal(find('[data-test-element="type"]').text(), "type: uk-types:domainItemType");
    assert.equal(find('[data-test-element="periodType"]').text(), "periodType: duration");
    assert.equal(find('[data-test-element="substitutionGroup"]').text(), "substitutionGroup: xbrli:item");
    assert.equal(find('[data-test-element="nillable"]').text(), "nillable: true");
    assert.equal(find('[data-test-element="abstract"]').text(), "abstract: true");
  });
});
