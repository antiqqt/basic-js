const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let ans = [];
  // Loop through rows of given matrix
  for (let i = 0; i < matrix.length; i++) {
    ans[i] = [];
    let row = matrix[i];
    let nextRow = matrix[i + 1];
    let prevRow = matrix[i - 1];
    // Loop through cells
    for (let j = 0; j < row.length; j++) {
      let sumOfBombs = 0;
      // Count bombs in next row if it exists
      if (nextRow) {
        for (let k = j - 1; k <= j + 1; k++) {
          if (nextRow[k]) {
            sumOfBombs++;
          }
        }
      }
      // Count bombs in previous row if it exists
      if (prevRow) {
        for (let k = j - 1; k <= j + 1; k++) {
          if (prevRow[k]) {
            sumOfBombs++;
          }
        }
      }
      // Count bombs in adjacent cells if they exist
      if (row[j - 1]) sumOfBombs++;
      if (row[j + 1]) sumOfBombs++;
      // Write the result
      ans[i][j] = sumOfBombs;
    }
  }

  return ans;
}

module.exports = {
  minesweeper
};
