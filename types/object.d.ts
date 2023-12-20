/**
 * @module object
 */
/**
 *   Checks object has required properties
 *   @param  {array.string}  required     Array of properties to check for
 *   @return {function}                   Function for user to use to test for props passed on objects
 *   @example
*     const testProps = hasRequiredProps(["name", "date"]);
*     if (testProps(userConfiguration)) {
*       // Stuff
*     }
*/
export function hasRequiredProps(required: array.string): Function;
//# sourceMappingURL=object.d.ts.map