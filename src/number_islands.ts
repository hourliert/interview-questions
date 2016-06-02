console.log('============= Island Counter =============');

// Given a 2D-matrix M of just zeroes and ones, count the number of island. An island is a group
// of ones or just a one by itself.


function appendIf(queue: number[][], x: number, y: number, r: number, c: number) {
  if (x >= 0 && x < r && y >= 0 && y < c) {
    queue.unshift([x, y]);
  }
}


// This is a BFS algorithm.
function findPartsOfIsland(matrix: number[][], i: number, j: number, r: number, c: number): void {
  const queue = [];

  appendIf(queue, i, j, r, c);

  while (queue.length !== 0) {
    const [x, y] = queue.pop();

    if (matrix[x][y] === 1) {
      matrix[x][y]++;
      appendIf(queue, x + 1, y, r, c);
      appendIf(queue, x - 1, y, r, c);
      appendIf(queue, x , y + 1, r, c);
      appendIf(queue, x, y - 1, r, c);
    }
  }
}


function islandCounter(matrix: number[][]): number {
  // null or empty matrix
  if (matrix === null || (matrix.length === 1 && matrix[0].length === 0)) {
    return 0;
  }

  let islands = 0;

  for (let i = 0, r = matrix.length; i < r; i++) {
    for (let j = 0, c = matrix[0].length; j < c; j++) {
      if (matrix[i][j] === 1) {
        islands++;
        findPartsOfIsland(matrix, i, j, r, c);
      }
    }
  }

  return islands;
}

const matrix1 = null;
const matrix2 = [[]];
const matrix3 = [[1, 0, 1],
                 [1, 1, 1]];

const matrix4 = [[0,0,0,0,0],
                 [0,1,1,1,0],
                 [0,1,0,1,0],
                 [0,1,1,1,0],
                 [0,0,0,0,0],
                 [1,0,0,0,0]];

const matrix5 = [[1, 1, 0, 0, 0],
                 [0, 1, 0, 0, 1],
                 [1, 0, 0, 1, 1],
                 [0, 0, 0, 0, 0],
                 [1, 0, 1, 0, 1]];

console.log(matrix1, islandCounter(matrix1));
console.log(matrix2, islandCounter(matrix2));
console.log(matrix3, islandCounter(matrix3));
console.log(matrix4, islandCounter(matrix4));
console.log(matrix5, islandCounter(matrix5));
