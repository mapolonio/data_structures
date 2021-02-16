const { describe, it } = require('mocha');
const { expect } = require('chai');
const { sampleSize } = require('lodash');

const { middleIndex, quicksort } = require('./quicksort');

describe('quicksort', () => {
  describe('middleIndex', () => {
    it('selects the index in the middle between fromIndex and toIndex', () => {
      expect(middleIndex(0, 0)).to.equal(0);
      expect(middleIndex(0, 1)).to.equal(0);
      expect(middleIndex(0, 2)).to.equal(1);
      expect(middleIndex(5, 9)).to.equal(7);
    });
  });

  describe('quicksort', () => {
    it('leaves a sorted array as it is', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      expect(quicksort([...array], 0, array.length - 1)).to.deep.equal(array);
    });

    it('sorts a reversed array', () => {
      const array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

      expect(quicksort([...array], 0, array.length - 1)).to.deep.equal([
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ]);
    });

    it('sorts an unsorted array', () => {
      const array = sampleSize([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 10);

      expect(quicksort([...array], 0, array.length - 1)).to.deep.equal([
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ]);
    });

    it('sorts an array with duplicates', () => {
      const array = [1, 2, 5, 4, 5, 6, 5, 8, 9, 10];

      expect(quicksort([...array], 0, array.length - 1)).to.deep.equal([
        1,
        2,
        4,
        5,
        5,
        5,
        6,
        8,
        9,
        10
      ]);
    });
  });
});
