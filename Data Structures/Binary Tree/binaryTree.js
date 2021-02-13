class BinaryTree {
  constructor(value) {
    this.value = value;
    this.leftTree = null;
    this.rightTree = null;
  }

  get left() {
    return this.leftTree;
  }

  get right() {
    return this.rightTree;
  }

  set left(value) {
    const leftTree = this.leftTree || new BinaryTree();

    this.leftTree = leftTree;
    leftTree.value = value;
  }

  set right(value) {
    const rightTree = this.rightTree || new BinaryTree();

    this.rightTree = rightTree;
    rightTree.value = value;
  }

  preOrder(fn) {
    fn(this.value);

    if (this.leftTree) {
      this.leftTree.preOrder(fn);
    }

    if (this.rightTree) {
      this.rightTree.preOrder(fn);
    }
  }

  inOrder(fn) {
    if (this.leftTree) {
      this.leftTree.inOrder(fn);
    }

    fn(this.value);

    if (this.rightTree) {
      this.rightTree.inOrder(fn);
    }
  }

  postOrder(fn) {
    if (this.leftTree) {
      this.leftTree.postOrder(fn);
    }

    if (this.rightTree) {
      this.rightTree.postOrder(fn);
    }

    fn(this.value);
  }

  insert(value) {
    const queue = [this];

    while (queue.length) {
      const currentNode = queue.shift();

      if (currentNode.value === undefined) {
        currentNode.value = value;
        break;
      }

      if (!currentNode.left) {
        currentNode.left = value;
        break;
      }

      queue.push(currentNode.left);

      if (!currentNode.right) {
        currentNode.right = value;
        break;
      }
      queue.push(currentNode.right);
    }
  }
}

module.exports = BinaryTree;
