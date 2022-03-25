const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  // npm run test ./test/transform*
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      if (arr[i] === '--discard-next') {
        if (arr[i + 1]) {
          i++;
        }
        continue;
      }

      if (arr[i] === '--discard-prev') {
        if (arr[i - 1] && result[result.length - 1] === arr[i - 1]) {
          result.pop();
        }
        continue;
      }

      if (arr[i] === '--double-next') {
        if (arr[i + 1]) {
          result.push(arr[i + 1]);
        }
        continue;
      }

      if (arr[i] === '--double-prev') {
        if (arr[i - 1] && result[result.length - 1] === arr[i - 1]) {
          result.push(arr[i - 1]);
        }
        continue;
      }

      result.push(arr[i]);
      
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

module.exports = {
  transform,
};
