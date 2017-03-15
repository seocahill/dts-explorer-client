import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  discoverableTaxonomySet: belongsTo(),
  presentationNodes: hasMany(),
  dimensionNodes: hasMany(),
});
