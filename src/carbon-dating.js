const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // Type check
  if (typeof sampleActivity !== 'string') return false;
  if (!Number(sampleActivity)) return false;

  // Check for inadequate values
  if (sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY) return false;

  // Calculate the rate constant
  let ln2 = 0.693;
  let k = ln2 / HALF_LIFE_PERIOD;

  // Solve equation according to the formula
  return Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / k);
}

module.exports = {
  dateSample,
};
