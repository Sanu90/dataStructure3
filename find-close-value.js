class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const findClosestValueInBst = (tree, target) => {
  let current = tree;
  let visited = [];

  while (current !== null) {
    if (current.value === target) {
      return current.value;
    }

    visited.push(current.value);

    if (target < current.value) {
      current = current.left;
    } else {
      current = current.right;
    }
  }

  let closestProximity = Number.POSITIVE_INFINITY;
  let closest;

  for (let i = 0; i < visited.length; i++) {
    let dist = proximity(visited[i], target);
    if (dist < closestProximity) {
      closestProximity = dist;
      closest = visited[i];
    }
  }
  return closest;
};

const proximity = (value, target) => {
  return Math.abs(value - target);
};

// Example usage:
const tree = new BST(10);
tree.left = new BST(5);
tree.right = new BST(15);
tree.left.left = new BST(2);
tree.left.right = new BST(5);
tree.right.left = new BST(13);
tree.right.right = new BST(22);
tree.left.left.left = new BST(1);
tree.right.left.right = new BST(14);

const target = 12;
console.log(findClosestValueInBst(tree, target)); // Output: 13
