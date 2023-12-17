/**
 * @module number
 */


/**
 * Test if number is within min and max
 * @param {Number} number
 * @param {Number} min 
 * @param {Number} max 
 * @returns {Number}
 */
export function isBetween(number, min, max) {
  return number >= min && number <= max;
}

