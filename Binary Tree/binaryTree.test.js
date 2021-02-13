const { describe, it } = require('mocha');
const { expect } = require('chai');
const BinaryTree = require('./binaryTree');

describe('Binary Tree', () => {
  describe('preOrder', () => {
    it('calls provided function following pre-order sequence', () => {
      const result = [];
      const tree = new BinaryTree(18);
      tree.left = 15;
      tree.right = 30;
      tree.left.left = 40;
      tree.left.right = 50;
      tree.right.left = 100;
      tree.right.right = 40;
      tree.left.left.left = 8;
      tree.left.left.right = 7;
      tree.left.right.left = 9;

      tree.preOrder((value) => result.push(value));

      expect(result).to.deep.equal([18, 15, 40, 8, 7, 50, 9, 30, 100, 40]);
    });
  });

  describe('inOrder', () => {
    it('calls provided function following in-order sequence', () => {
      const result = [];
      const tree = new BinaryTree(18);
      tree.left = 15;
      tree.right = 30;
      tree.left.left = 40;
      tree.left.right = 50;
      tree.right.left = 100;
      tree.right.right = 40;
      tree.left.left.left = 8;
      tree.left.left.right = 7;
      tree.left.right.left = 9;

      tree.inOrder((value) => result.push(value));

      expect(result).to.deep.equal([8, 40, 7, 15, 9, 50, 18, 100, 30, 40]);
    });
  });

  describe('postOrder', () => {
    it('calls provided function following post-order sequence', () => {
      const result = [];
      const tree = new BinaryTree(18);
      tree.left = 15;
      tree.right = 30;
      tree.left.left = 40;
      tree.left.right = 50;
      tree.right.left = 100;
      tree.right.right = 40;
      tree.left.left.left = 8;
      tree.left.left.right = 7;
      tree.left.right.left = 9;

      tree.postOrder((value) => result.push(value));

      expect(result).to.deep.equal([8, 7, 40, 9, 50, 15, 100, 40, 30, 18]);
    });
  });

  describe('insert', () => {
    it('inserts elements following a DFS order', () => {
      const resultA = [];
      const resultB = [];
      const treeA = new BinaryTree(18);
      const treeB = new BinaryTree();
      treeA.left = 15;
      treeA.right = 30;
      treeA.left.left = 40;
      treeA.left.right = 50;
      treeA.right.left = 100;
      treeA.right.right = 40;
      treeA.left.left.left = 8;
      treeA.left.left.right = 7;
      treeA.left.right.left = 9;

      for (const value of [18, 15, 30, 40, 50, 100, 40, 8, 7, 9]) {
        treeB.insert(value);
      }

      treeA.inOrder((value) => resultA.push(value));
      treeB.inOrder((value) => resultB.push(value));

      expect(resultA).to.deep.equal(resultB);
    });
  });
});
