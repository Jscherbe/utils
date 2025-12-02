/**
 * @module object
 */

/**
 * Checks object has required properties
 * @param  {Array.<String>}  required Array of properties to check for
 * @return {Function} Function for user to use to test, fn(object) returns boolean whether all properties are set
 * @example 
*    const testProps = hasRequiredProps(["name", "date"]);
*    if (testProps(userConfiguration)) {
*      // Stuff
*    }
*/
export function hasRequiredProps(required) {
  return (obj) => {
    return required.every(prop => {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    });
  };
}

/**
 * Returns an object or array if the condition is truthy, otherwise returns a new empty array or object.
 * - Primary use is for keeping configuration objects clean adding conditions inline
 * - Useful for conditionally adding properties to an object or elements to an array via spreading.
 * @param {*} cond The condition to evaluate.
 * @param {Object|Array} value The object or array to return if the condition is truthy.
 * @returns {Object|Array} Returns `value` if `cond` is truthy, otherwise returns `[]` if `value` was an array, or `{}`.
 * @example
 * // Conditionally add properties to an object
 * const config = {
 *   name: "My App",
 *   ...includeIf(isAdmin, { canDelete: true })
 * };
 *
 * @example
 * // Conditionally add elements to an array in a config
 * const settings = {
 *   plugins: [
 *     "plugin-a",
 *     ...includeIf(isPro, ["plugin-pro-b", "plugin-pro-c"])
 *   ]
 * };
 */
export function includeIf(cond, value) {
  return cond ? value : (Array.isArray(value) ? [] : {});
}