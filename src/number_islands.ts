console.log('============= Islands Counter =============');


function appendIf(queue: number[][], x: number, y: number, r: number, c: number) {
  if (x >= 0 && x < r && y >= 0 && y < c) {
    queue.unshift([x, y]);
  }
}


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


function islandsCounter(matrix: number[][]): number {
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

console.log(matrix1, islandsCounter(matrix1));
console.log(matrix2, islandsCounter(matrix2));
console.log(matrix3, islandsCounter(matrix3));
console.log(matrix4, islandsCounter(matrix4));
console.log(matrix5, islandsCounter(matrix5));
