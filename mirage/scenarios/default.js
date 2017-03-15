const dfsNames = ["UK-GAAP", "UK-IFRS", "IE-GAAP", "IE-IFRS"];

export default function(server) {
  dfsNames.forEach((dfsName) => {
    server.create('discoverable-taxonomy-set', { name: dfsName });
  });
  server.loadFixtures('roleTypes');
  server.loadFixtures('elements');
  server.loadFixtures('presentationNodes');
  server.loadFixtures('dimensionNodes');
}
