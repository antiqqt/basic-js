const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
<<<<<<< HEAD
=======
  // npm run test ./test/dns*
>>>>>>> f21de726d82d7e1c3a7031298f6989e086cdb8fe
  const result = {};

  domains.forEach((str) => {
    const strSplit = str.split('.');
    let newStr = '';

    for (let i = 1; i <= strSplit.length; i++) {
      newStr += '.' + strSplit[strSplit.length - i];
      result[newStr] = (result[newStr] ?? 0) + 1;
    }
  });

  return result;
}

module.exports = {
  getDNSStats,
};
