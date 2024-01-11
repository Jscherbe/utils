/**
 * @module array
 */


/**
 * Tests an array agains another array, returns true 
 * if the array has all items in the required array
 * @param {Array} array Array to test on
 * @param {Array} required Elements that should be present in the array
 * @returns {Boolean}
 */
export function arrayHas(array, required) {
  return required.every(val => array.includes(val));
}

/**
 * Adds properties to an array of objects
 * @param {Array} array Array of Objects
 * @param {Object} props Properties to add to each object in array
 */
export function arrayAssign(array, props) {
  array.forEach(obj => Object.assign(obj, props));
  return array;
}


/**
 * Creates a new array of X length and fills the array using callback
 * @param {Number} count Number of elements to create
 * @param {Funtion} callback Callback to template the array element (passed only index)
 * @returns Array
 */
export function arrayCreate(count, callback) {
  return [...Array(count)].map((_, index) => callback(index));
}

/**
 * Removes an array element (modifies array)
 * @param {Array} array Array to remove element from
 * @param {Element} element Array element to remove
 */
export function removeArrayElement(array, element) {
  var index = array.indexOf(element);
  if (index > -1) {
    array.splice(index, 1);
  }
}

/**
 * Searches array for first item matching test, beginning at a start index but searching the entire array
 * @param {Array} array Array to search
 * @param {Number} start The index in the array to start the search from
 * @param {Function} callback A test function that is passed array item and index
 */
export function offsetFindIndexOf(array, start = 0, callback) {
  let found, offset;
  for (var i = 0; i < array.length; i++) {
    offset = (i + start) % array.length;
    found = callback(array[offset], offset);
    if (found) return offset;
  }
  return -1;
}

/**
 * Remove duplicate items in array
 * @param {Array} array Array to remove duplicates from
 * @returns {Array} New array with duplicates removed
 */
export function removeDuplicates(array) {
  const set = new Set(array);
  return [...set];
}

/**
 * Create empty matrix with optional value
 * @param {Number} columnCount 
 * @param {Number} rowCount 
 * @param {*} value Value to set, default is null
 * @returns {Array.Array} Matrix (array of arrays)
 */
export function createEmptyMatrix(columnCount, rowCount, value = null) {
  const matrix = [];
  while (rowCount) {
    matrix.push(Array(columnCount).fill(value));
    --rowCount;
  }
  return matrix;
}