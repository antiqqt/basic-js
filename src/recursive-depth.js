const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    // make depth counter
    let depthSum = 1;
    // check if there are any nested arrays
    let nestedArrays = arr.filter(elem => Array.isArray(elem));
    // if not, return counter
    if (nestedArrays.length === 0) {
      return depthSum;
    }
    // it there are, calculate depth of each one,
    // then take the biggest number
    depthSum += Math.max(...nestedArrays.map(elem => this.calculateDepth(elem)));
    return depthSum;
  }
}

module.exports = {
  DepthCalculator
};
