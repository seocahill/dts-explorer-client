const dfsNames = ["UK-GAAP", "UK-IFRS", "IE-GAAP", "IE-IFRS"];
const roleTypes = [
  "10 - Profit and Loss Account", 
  "11 - Balance Sheet", "12 - Cash Flow Statement", 
  "13 - Statement of Total Recognised Gains and Losses"
];

export default function(server) {
  dfsNames.forEach((dfsName) => {
    const dfs = server.create('discoverable-taxonomy-set', { name: dfsName });
    roleTypes.forEach((roleType) => {
      server.create('role-type', { definition: roleType, discoverableTaxonomySet: dfs });
    })
  })
}
