import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  roleType: belongsTo(),
  element: belongsTo(),
  parent: belongsTo('dimension-node')
});
