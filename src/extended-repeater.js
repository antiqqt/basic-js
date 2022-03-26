const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(
  str,
  {
    repeatTimes = 0,
    separator = '+',
    addition = '',
    additionRepeatTimes = 0,
    additionSeparator = '|',
  }
) {
  // Check types of primary arguments
  if (typeof str !== 'string') str = String(str);
  if (typeof addition !== 'string') addition = String(addition);

  // Get full addition string
  let combinedAddition = getFullString(
    addition,
    additionRepeatTimes,
    additionSeparator
  );

  // Get full main string
  str += combinedAddition;
  str = getFullString(str, repeatTimes, separator);

  return str;
}

function getFullString(base, repeats, separator) {
  let combined = '';

  if (repeats > 0) {
    for (let i = 0; i < repeats; i++) {
      combined += base;
      if (i !== repeats - 1) {
        combined += separator;
      }
    }
  } else {
    combined = base;
  }

  return combined;
}

module.exports = {
  repeater,
};
