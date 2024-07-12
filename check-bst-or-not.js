class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class binaryTree {
  constructor() {
    this.root = null;
  }

  isBST(node = this.root, min = -Infinity, max = Infinity) {
    if (!node) {
      return true;
    }
    if (node.value < min || node.value > max) {
      return false;
    }

    return (
      this.isBST(node.left, min, node.value) &&
      this.isBST(node.right, node.value, max)
    );
  }
}

const tree = new binaryTree();
tree.root = new Node(10);
tree.root.left = new Node(17);
tree.root.right = new Node(12);

console.log(tree.isBST());
