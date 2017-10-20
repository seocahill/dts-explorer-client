import { JSONAPISerializer } from 'ember-cli-mirage';

export default JSONAPISerializer.extend({
  include: ['presentation-nodes', 'dimension-nodes']
});
