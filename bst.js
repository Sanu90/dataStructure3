class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root == null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertAgain(this.root, newNode);
    }
  }

  insertAgain(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left == null) {
        root.left = newNode;
      } else {
        this.insertAgain(root.left, newNode);
      }
    } else {
      if (root.right == null) {
        root.right = newNode;
      } else {
        this.insertAgain(root.right, newNode);
      }
    }
  }

  display() {
    console.log(this.root);
  }

  search(root, value) {
    if (!root) return false;
    if (root.value === value) return true;
    if (value < root.value) {
      return this.search(root.left, value);
    } else {
      return this.search(root.right, value);
    }
  }
}

const bst = new BST();
console.log(bst.isEmpty());
bst.insert(5);
bst.insert(15);
bst.insert(6);
bst.insert(8);
bst.insert(3);
bst.insert(10);
bst.insert(4);
bst.display();
console.log(bst.isEmpty());
console.log(bst.search(bst.root, 67));
