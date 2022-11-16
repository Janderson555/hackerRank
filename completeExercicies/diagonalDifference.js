/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
  let diagonalA = 0;
  let diagonalB = 0;
  arr.map((e, i) => {
    diagonalA += e.at(i); // mesma coisa que e[i]
    diagonalB += e.at(-i - 1);
  })
  return Math.abs(diagonalA - diagonalB)
}

const array2d = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9]
]

console.log(diagonalDifference(array2d));
// 😎 check
