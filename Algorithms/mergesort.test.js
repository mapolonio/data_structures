const { describe, it } = require('mocha');
const { expect } = require('chai');
const { sampleSize } = require('lodash');

const { mergesort } = require('./mergesort');

describe('mergesort', () => {
  it('leaves a sorted array as it is', () => {
    const arrayA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const arrayB = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    expect(mergesort([...arrayA], 0, arrayA.length - 1)).to.deep.equal(arrayA);
    expect(mergesort([...arrayB], 0, arrayB.length - 1)).to.deep.equal(arrayB);
  });

  it('sorts a reversed array', () => {
    const arrayA = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    const arrayB = [10, 9, 8, 7, 6, 5, 4, 3, 2];

    expect(mergesort([...arrayA], 0, arrayA.length - 1)).to.deep.equal([
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
    expect(mergesort([...arrayB], 0, arrayB.length - 1)).to.deep.equal([
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
    const arrayA = sampleSize([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 10);
    const arrayB = sampleSize([10, 9, 8, 7, 6, 5, 4, 3, 2], 9);

    expect(mergesort([...arrayA], 0, arrayA.length - 1)).to.deep.equal([
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
    expect(mergesort([...arrayB], 0, arrayB.length - 1)).to.deep.equal([
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
    const arrayA = [1, 2, 5, 4, 5, 6, 5, 8, 9, 10];
    const arrayB = [1, 2, 5, 4, 5, 6, 5, 8, 9];

    expect(mergesort([...arrayA], 0, arrayA.length - 1)).to.deep.equal([
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
    expect(mergesort([...arrayB], 0, arrayB.length - 1)).to.deep.equal([
      1,
      2,
      4,
      5,
      5,
      5,
      6,
      8,
      9
    ]);
  });
});
