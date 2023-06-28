function treeIntersection(tree1, tree2) {
  const set1 = treeToSet(tree1);
  const set2 = treeToSet(tree2);

  const intersectionSet = new Set();

  for (const value of set1) {
    if (set2.has(value)) {
      intersectionSet.add(value);
    }
  }

  return intersectionSet;
}

function treeToSet(tree) {
  // Convert binary tree to a set of values
  // Implement the conversion logic
}

module.exports = treeIntersection;
