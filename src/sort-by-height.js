const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // Make array without '-1' 
  // and sort it in decreasing order
  let clearedArr = arr.filter((x) => x !== -1);
  clearedArr.sort((a, b) => b - a);

  // Loop through original array,
  // if element is '-1' skip,
  // else pop last element from cleared array
  // and switch with current
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      continue;
    }
    arr[i] = clearedArr.pop();
  }

  return arr;
}

module.exports = {
  sortByHeight
};
