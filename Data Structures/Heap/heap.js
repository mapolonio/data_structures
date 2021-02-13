class Heap {
  constructor() {
    this.nodes = [];
  }

  insert(number) {
    let index = this.nodes.push(number) - 1;
    let parentIndex = this.getParentIndex(index);

    while (
      parentIndex !== null &&
      this.nodes[index] < this.nodes[parentIndex]
    ) {
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = this.getParentIndex(index);
    }
  }

  extractMin() {
    if (this.nodes.length === 0) {
      return null;
    }

    this.swap(0, this.nodes.length - 1);

    const min = this.nodes.pop();

    this.bubbleDown(0);

    return min;
  }

  bubbleDown(index) {
    const leftChildIndex = this.getLeftChildIndex(index);
    const rightChildIndex = this.getRightChildIndex(index);
    const leftChild = this.nodes[leftChildIndex];
    const rightChild = this.nodes[rightChildIndex];

    if (leftChild === undefined) {
      return;
    }

    const minChildIndex =
      rightChild === undefined || leftChild < rightChild
        ? leftChildIndex
        : rightChildIndex;

    if (this.nodes[minChildIndex] < this.nodes[index]) {
      this.swap(index, minChildIndex);

      return this.bubbleDown(minChildIndex);
    }
  }

  swap(indexA, indexB) {
    const temp = this.nodes[indexA];
    this.nodes[indexA] = this.nodes[indexB];
    this.nodes[indexB] = temp;
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  getParentIndex(index) {
    if (index === 0) {
      return null;
    }

    return Math.floor((index - 1) / 2);
  }
}

module.exports = Heap;
