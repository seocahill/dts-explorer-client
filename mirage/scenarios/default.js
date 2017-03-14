export default function(server) {
  server.create('discoverable-taxonomy-set', {name: "UK-GAAP"});
  server.create('discoverable-taxonomy-set', {name: "UK-IFRS"});
  server.create('discoverable-taxonomy-set', {name: "IE-GAAP"});
  server.create('discoverable-taxonomy-set', {name: "IE-IFRS"});
}
