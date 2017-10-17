console.log('============= Dichotomy Search =============');

function dichoSearch(array: number[], target: number) {
	if (array === null || array === undefined || array.length === 0) return -1;
	if (array.length === 1) return (array[0] === target) ? 0 : -1;

	var middle = Math.floor(array.length / 2);

  if (target >= array[middle]) {
    var rightIndex = dichoSearch(array.slice(middle), target);

    return (rightIndex !== -1) ? rightIndex + middle : -1;
  } else {
    return dichoSearch(array.slice(0, middle), target);
  }
}

console.log(dichoSearch([1, 3, 5, 6, 7], 3));

const matrix = [
  [1, 3, 6, 7],
  [10, 12, 17, 21],
  [23, 25, 28, 40]
];

function matrixSearch(matrix: number[][], target: number) {
  if (matrix === null || matrix === undefined || matrix.length === 0) return false;
  if (matrix.length === 1) return dichoSearch(matrix[0], target) > -1;

  var row = 0;
  var nextRow = 1;

  while (nextRow < matrix.length) {
    if (matrix[row][0] <= target && target < matrix[nextRow][0]) {
      return dichoSearch(matrix[row], target) > -1;
    }

    row++;
    nextRow++;
  }

  return dichoSearch(matrix[row], target) > -1;
}

console.log('============= Ordered Matrix Search =============');
console.log(matrixSearch(matrix, 6));
