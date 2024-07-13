// BST //

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
    const node = new Node(value);
    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insertChild(this.root, node);
    }
  }

  insertChild(root, node) {
    if (node.value < root.value) {
      if (root.left == null) {
        root.left = node;
      } else {
        this.insertChild(root.left, node);
      }
    } else {
      if (root.right == null) {
        root.right = node;
      } else {
        this.insertChild(root.right, node);
      }
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    }
    if (root.value == value) return true;
    if (value < root.value) {
      return this.search(root.left, value);
    } else {
      return this.search(root.right, value);
    }
  }

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  breadthFS() {
    let queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  min(root) {
    if (!root.left) {
      return root.value;
    }
    return this.min(root.left);
  }

  max(root) {
    if (!root.right) {
      return root.value;
    }
    return this.max(root.right);
  }

  height(root) {
    if (!root) {
      //  console.log("empty");
      return 0;
    }
    let leftHeight = this.height(root.left);
    let rightHeight = this.height(root.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }

  remove(value) {
    this.root = this.removeNode(this.root, value);
    return 0;
  }

  removeNode(root, value) {
    if (!root) {
      console.log("Value not in BST");
      return;
    }
    if (value < root.value) {
      root.left = this.removeNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.removeNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.right) {
        return root.left;
      } else if (!root.left) {
        return root.right;
      }
      root.value = this.min(root.right);
      root.right = this.removeNode(root.right, root.value);
    }
    return root;
  }

  display() {
    console.log(this.root);
  }
}

const bst = new BST();
bst.insert(10);
bst.insert(20);
bst.insert(4);
bst.insert(3);
bst.insert(5);
bst.insert(15);
bst.insert(40);
bst.insert(8);
console.log(bst.search(bst.root, 40));
//bst.preOrder(bst.root);
//bst.inOrder(bst.root);
//bst.display()
//bst.postOrder(bst.root);
//bst.breadthFS();
console.log("**");
console.log("small:", bst.min(bst.root));
console.log("big:", bst.max(bst.root));
console.log("**");
console.log(bst.height(bst.root));
console.log("**");
bst.remove(20);
//bst.inOrder(bst.root);
bst.display();
console.log(bst.height(bst.root));
