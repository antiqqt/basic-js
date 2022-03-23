const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  // Check for types
  if (!Array.isArray(arr)) return false;
  
  // Map elements to its first letter,
  // filter empty cells
  // sort by charCode
  // join together as string
  return arr
    .map((name) => {
      if (typeof name !== 'string') {
        return;
      }
      return name.trim()[0].toUpperCase();
    })
    .filter((x) => x)
    .sort()
    .join('');
}

module.exports = {
  createDreamTeam
};
