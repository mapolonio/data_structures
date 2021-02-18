const merge = (array, fromIndex, middle, toIndex) => {
  const helper = [];

  for (let i = fromIndex; i <= toIndex; i += 1) {
    helper[i] = array[i];
  }

  let left = fromIndex;
  let right = middle + 1;
  let currentIndex = fromIndex;

  while (left <= middle && right <= toIndex) {
    if (helper[left] <= helper[right]) {
      array[currentIndex] = helper[left];
      left += 1;
    } else {
      array[currentIndex] = helper[right];
      right += 1;
    }

    currentIndex += 1;
  }

  for (let i = left; i <= middle; i += 1) {
    array[currentIndex] = helper[i];
    currentIndex += 1;
  }
};

const mergesort = (array, fromIndex, toIndex) => {
  if (toIndex === fromIndex) {
    return array;
  }

  const middle = Math.floor((fromIndex + toIndex) / 2);

  mergesort(array, fromIndex, middle);
  mergesort(array, middle + 1, toIndex);
  merge(array, fromIndex, middle, toIndex);

  return array;
};

module.exports = {
  mergesort
};
