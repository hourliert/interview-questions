function shouldColor(matrix: number[][], i: number, j: number, value: number) {
  return matrix[i][j] !== 1 && matrix[i][j] !== value;
}

function appendIf2(queue: number[][], i: number, j: number, row: number, column: number) {
  if (0 <= i && i < row && 0 <= j && j < column) {
    queue.unshift([i, j]);
  }
}

function colorIsland(matrix: number[][], i: number, j: number, row: number, column: number, value: number) {
  const queue = [];

  appendIf2(queue, i, j, row, column);

  while (queue.length !== 0) {
    const [x, y] = queue.pop();

    if (shouldColor(matrix, x, y, value)) {
      matrix[x][y] = value;
      appendIf2(queue, x + 1, y, row, column); // SOUTH
      appendIf2(queue, x - 1, y, row, column); // NORTH
      appendIf2(queue, x, y + 1, row, column); // EAST
      appendIf2(queue, x, y - 1, row, column); // WEST
    }
  }
}

function floodFill(matrix: number[][], value): number[][] {
  if (matrix === null || (matrix.length === 1 && matrix[0].length === 0)) {
    return null;
  }

  for (let i = 0, row = matrix.length ; i < row ; i++) {
    for (let j = 0, column = matrix[i].length ; j < column ; j++) {
      if (shouldColor(matrix, i, j, value)) {
        console.log('==== COLORING ISLAND ====');
        console.log(matrix);

        colorIsland(matrix, i, j, row, column, value);
      }
    }
  }

  return matrix;
}



const test = [
  [0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0],
];

console.log(floodFill(test, 5));
