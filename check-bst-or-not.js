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
  isBST(node = this.root, min = null, max = null) {
    if (node === null) {
      return true;
    }

    if (
      (min != null && node.value <= min) ||
      (max != null && node.value >= max)
    ) {
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
tree.root.left = new Node(4);
tree.root.right = new Node(17);
tree.root.left.left = new Node(1);
tree.root.left.right = new Node(5);
tree.root.right.left = new Node(15);
tree.root.right.right = new Node(18);
//tree.root.right.right.left = new Node(100);

console.log(tree.isBST());
