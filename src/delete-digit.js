const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let nAsArray = String(n).split('');
  let nums = [];
  for (let i = 0; i < nAsArray.length; i++) {
    let num = nAsArray.reduce((acc, curr, index) => {
      if (i === index) {
        return acc;
      }
      return acc + curr;
    }, '')
    nums.push(num);
  }
  return Math.max(...nums);
}

module.exports = {
  deleteDigit
};
