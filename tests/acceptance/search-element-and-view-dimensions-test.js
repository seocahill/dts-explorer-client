/* global server  */
import { test } from 'qunit';
import moduleForAcceptance from 'dts-explorer/tests/helpers/module-for-acceptance';
import testSelector from 'ember-test-selectors';

moduleForAcceptance('Acceptance | search NameThirdPartyAgent element and view dimensions', {
  afterEach() {
    if (server !== undefined) { server.shutdown(); }
  }
});

test('search element with dimensions and drill down', function(assert) {
  server.loadFixtures();
  visit('/discoverable-taxonomy-sets/1/role-types/1');
  andThen(() => assert.equal(currentURL(), '/discoverable-taxonomy-sets/1/role-types/1/presentation-nodes'));
  click('a:contains("EntityInformationHeading")');
  fillIn(testSelector('search-input'), "name");
  triggerEvent(testSelector('search-input'), 'keyup');
  click('a:contains("NameThirdPartyAgent")');
  andThen(() => assert.equal(find(testSelector('element-properties')).text(), 'NameThirdPartyAgent'));

  click('a:contains("dimensions")');
  click('[data-test-dimension-nodes] > a:contains("NameThirdPartyAgent")');
  andThen(() => assert.equal(find('[data-test-dimension-nodes] > a:first').text(), 'DimensionsParent-ThirdPartyAgents (choice required)'));

  click('[data-test-dimension-nodes] > a');
  andThen(() => assert.equal(find('[data-test-dimension-nodes] > a:first').text(), 'ThirdPartyAgentsHypercube (choice required)'));
  click('[data-test-dimension-nodes] > a');
  andThen(() => {
    assert.equal(find('[data-test-dimension-nodes] > a:nth(5)').text(), 'tries_CountriesDimension (has default)');
  });
  

  click('[data-test-dimension-nodes] > a:contains("ThirdPartyAgentTypeDimension")');
  click('[data-test-dimension-nodes] > a:contains("DimensionMembersIdentifyingTypeThirdPartyAgentHeading")');
  andThen(() => assert.equal(find('[data-test-dimension-nodes] > a').length, 8));

  click('[data-test-dimension-nodes] > a:contains("EntityBankers")');
  click('a:contains("EntityBankers")');
  andThen(() => {
    assert.equal(find(testSelector('element', 'name')).text(), "name EntityBankers");
    assert.equal(find(testSelector('element', 'type')).text(), "type uk-types:domainItemType");
    assert.equal(find(testSelector('element', 'periodType')).text(), "periodType duration");
    assert.equal(find(testSelector('element', 'substitutionGroup')).text(), "substitutionGroup xbrli:item");
    assert.equal(find(testSelector('element', 'nillable')).text(), "nillable true");
    assert.equal(find(testSelector('element', 'abstract')).text(), "abstract true");
  });
  click('a:contains("close")');
  andThen(() => findWithAssert(testSelector('dimension-nodes')));

  click(testSelector('dimension-parent'));
  andThen(() => assert.equal(find(testSelector('dimension-node')).text(), 'DimensionMembersIdentifyingTypeThirdPartyAgentHeading'));
});
