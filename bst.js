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
    if (!root) return false;
    if (root.value == value) return true;
    if (value < root.value) {
      return this.search(root.left, value);
    } else {
      return this.search(root.right, value);
    }
  }

  preOrder(root) {
    if (!root) return false;

    console.log("PRE-ORDER", root.value);
    this.preOrder(root.left);
    this.preOrder(root.right);
  }

  inOrder(root) {
    if (!root) return false;
    this.inOrder(root.left);
    console.log(root.value);
    //array.push(root.value);
    this.inOrder(root.right);
  }

  postOrder(root) {
    if (!root) return false;
    this.postOrder(root.left);
    this.postOrder(root.right);
    console.log("POST_ORDER", root.value);
  }

  display() {
    console.log(this.root);
  }

  //pre --> root,left,right.
  //in --> left, root, right.
  //post --> left,right, root.

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
    } else {
      return this.min(root.left);
    }
  }

  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
    return `deleted`;
  }

  deleteNode(root, value) {
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }
}

const bst = new BST();
//console.log("is tree empty? ", bst.isEmpty());
bst.insert(10);
bst.insert(5);
bst.insert(2);
bst.insert(9);
bst.insert(19);
bst.insert(15);
console.log("is tree empty? ", bst.isEmpty());
console.log(bst.search(bst.root, 2));
//bst.display();
//bst.inOrder(bst.root);
bst.breadthFS();

console.log(bst.min(bst.root));
console.log(bst.max(bst.root));
