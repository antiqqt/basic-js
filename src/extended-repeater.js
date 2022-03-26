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
function repeater(str, {
  repeatTimes = 0,
  separator = '+',
  addition = '',
  additionRepeatTimes = 0,
  additionSeparator= '|', 
}) {
  // Check types of primary arguments
  if (typeof str !== 'string') str = String(str);
  if (typeof addition  !== 'string') addition = String(addition);

  // Get full addition string 
  let combinedAddition = '';
  if (additionRepeatTimes > 0) {
    for (let i = 0; i < additionRepeatTimes; i++) {
      combinedAddition += addition;
      if (i !== additionRepeatTimes - 1) {
        combinedAddition += additionSeparator;
      }
    }
  } else {
    combinedAddition = addition;
  }

  // Get full main string
  str += combinedAddition;
  let combinedStr = '';

  if (repeatTimes > 0) {
    for (let i = 0; i < repeatTimes; i++) {
      combinedStr += str;
      if (i !== repeatTimes - 1) {
        combinedStr += separator;
      }
    }
  } else {
    combinedStr = str;
  }

  return combinedStr;
}

module.exports = {
  repeater
};
