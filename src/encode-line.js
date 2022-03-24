const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let counter = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i + 1] !== str[i]) {
      if (counter > 1) {
        result += counter + str[i];
        counter = 1;
        continue;
      }
      result += str[i];
      continue;
    }
    counter++;
  }

  return result;
}

module.exports = {
  encodeLine,
};
