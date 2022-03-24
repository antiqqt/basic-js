const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let [map1, map2] = [{}, {}];

  s1.split('').forEach((x) => (map1[x] = map1[x] + 1 || 1));
  s2.split('').forEach((x) => (map2[x] = map2[x] + 1 || 1));

  let count = 0;
  for (let key of Object.keys(map1)) {
    if (map2[key]) {
      count += Math.min(map1[key], map2[key]);
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount,
};
