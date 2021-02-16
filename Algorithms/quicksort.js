const swap = (array, i, j) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

const middleIndex = (fromIndex, toIndex) => {
  return fromIndex + Math.floor((toIndex - fromIndex) / 2);
};

const partition = (array, fromIndex, toIndex, pivotPicker) => {
  const pivotIndex = pivotPicker(fromIndex, toIndex);
  const pivot = array[pivotIndex];
  let i = fromIndex;
  let j = toIndex;

  while (i <= j) {
    while (array[i] < pivot) {
      i += 1;
    }

    while (array[j] > pivot) {
      j -= 1;
    }

    if (i <= j) {
      swap(array, i, j);
      i += 1;
      j -= 1;
    }
  }

  return i;
};

const quicksort = (
  array,
  fromIndex,
  toIndex,
  pivotSelection = 'middleIndex'
) => {
  if (fromIndex >= toIndex) {
    return array;
  }

  let pivotPicker;

  switch (pivotSelection) {
    default:
      pivotPicker = middleIndex;
  }

  const pivotIndex = partition(array, fromIndex, toIndex, pivotPicker);

  quicksort(array, fromIndex, pivotIndex - 1, pivotSelection);
  quicksort(array, pivotIndex, toIndex, pivotSelection);

  return array;
};

module.exports = {
  quicksort,
  middleIndex
};
