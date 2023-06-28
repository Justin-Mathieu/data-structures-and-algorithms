// Create two binary trees
const tree1 = new BinaryTree();
const tree2 = new BinaryTree();

// Build the trees with values
// ...

const commonValues = treeIntersection(tree1, tree2);

console.log("Common values in the two trees:");
commonValues.forEach(value => console.log(value));