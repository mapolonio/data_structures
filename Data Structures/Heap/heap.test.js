const { describe, it } = require('mocha');
const { expect } = require('chai');
const { sampleSize } = require('lodash');
const Heap = require('./heap');

describe('Heap', () => {
  describe('getParentIndex', () => {
    it('returns the index of the parent node', () => {
      const heap = new Heap();

      expect(heap.getParentIndex(0)).to.equal(null);
      expect(heap.getParentIndex(1)).to.equal(0);
      expect(heap.getParentIndex(2)).to.equal(0);
      expect(heap.getParentIndex(3)).to.equal(1);
      expect(heap.getParentIndex(4)).to.equal(1);
      expect(heap.getParentIndex(5)).to.equal(2);
      expect(heap.getParentIndex(6)).to.equal(2);
      expect(heap.getParentIndex(7)).to.equal(3);
      expect(heap.getParentIndex(8)).to.equal(3);
      expect(heap.getParentIndex(9)).to.equal(4);
    });
  });

  describe('insert', () => {
    it('inserts elements into the heap maintaining the min heap structure', () => {
      const heap = new Heap();

      heap.insert(10);
      heap.insert(9);
      heap.insert(8);
      heap.insert(7);
      heap.insert(6);
      heap.insert(5);
      heap.insert(4);
      heap.insert(3);
      heap.insert(2);
      heap.insert(1);

      expect(heap.nodes).to.deep.equal([1, 2, 5, 4, 3, 9, 6, 10, 7, 8]);
    });
  });

  describe('extractMin', () => {
    it('extracts the min element from heap maintaining the heap structure', () => {
      const heap = new Heap();
      const numbers = [...new Array(100)].map((_, i) => i + 1);
      const result = [];

      for (const n of sampleSize(numbers, numbers.length)) {
        heap.insert(n);
      }

      while (heap.nodes.length) {
        result.push(heap.extractMin());
      }

      expect(result).to.deep.equal(numbers);
    });
  });
});
