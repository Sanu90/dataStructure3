class minHeap {
  constructor() {
    this.arr = [];
    this.size = 0;
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeftChild(i) {
    return 2 * i + 1;
  }

  getRightChild(i) {
    return 2 * i + 2;
  }

  hasParent(i) {
    return this.getParentIndex(i) >= 0;
  }

  hasLeftChild(i) {
    return this.getLeftChild(i) < this.size;
  }

  hasRightChild(i) {
    return this.getRightChild(i) < this.size;
  }

  parent(i) {
    return this.arr[this.getParentIndex(i)];
  }

  leftChild(i) {
    return this.arr[this.getLeftChild(i)];
  }

  rightChild(i) {
    return this.arr[this.getRightChild(i)];
  }

  swap(i1, i2) {
    let temp = this.arr[i1];
    this.arr[i1] = this.arr[i2];
    this.arr[i2] = temp;
  }

  insert(value) {
    this.arr[this.size] = value;
    this.size++;
    this.heapifyUp(this.size - 1);
  }

  heapifyUp(i) {
    if (this.hasParent(i) && this.parent(i) < this.arr[i]) {
      this.swap(this.getParentIndex(i), i);
      this.heapifyUp(this.getParentIndex(i));
    }
  }

  removeMin() {
    if (this.size === 0) {
      console.log("heap is empty");
      return;
    }
    const data = this.arr[0];
    this.arr[0] = this.arr[this.size - 1];
    this.size--;
    this.heapifyDown(0);
    return data;
  }

  heapifyDown(i) {
    while (this.hasLeftChild(i)) {
      let smallestChildIndex = this.getLeftChild(i);
      if (this.hasRightChild(i) && this.rightChild(i) > this.leftChild(i)) {
        smallestChildIndex = this.getRightChild(i);
      }
      if (this.arr[i] > this.arr[smallestChildIndex]) {
        break;
      }
      this.swap(i, smallestChildIndex);
      i = smallestChildIndex;
    }
  }

  display() {
    let arr = [];
    for (let i = 0; i < this.size; i++) {
      arr.push(this.arr[i]);
    }
    console.log(arr);
  }
}

const h = new minHeap();
h.insert(10);
h.insert(50);
h.insert(20);
h.insert(11);
h.insert(8);
h.insert(25);
h.display();
h.removeMin();
console.log("remove");
h.display();
console.log(h.hasParent(1));
