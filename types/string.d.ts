/**
 * Capitalize First Letter
 * @param {String} string String to capitolize
 * @returns {String}
 */
export function capitalizeFirstLetter(string: string): string;
/**
 * Convert string to characters safe for URL
 * @param {String} string The string to convert
 * @returns {String}
 */
export function urlize(string: string): string;
/**
 *   Will return an object with the separation details
 *   @param  {String} string CSS number with unit
 *   @return {Object}        keys: value, original, unit
 */
export function separateCssUnit(original: any): any;
/**
 * Removes HTML tags from string (can be used in Node)
 * - Different than DOM version
 * - Note you can use document.createElement and grab textContent (but this could execute code in browser)
 * - The method below will just use regex without creating Nodes
 * @param {String} html HTML string to find/replace
 */
export function stripTags(html: string): string;
/**
 * Remove double spaces
 * @param {String} string String to trim
 * @returns {String}
 */
export function trimDoubleSpaces(string: string): string;
/**
 * Remove line breaks
 * @param {String} string String to trim
 * @returns {String}
 */
export function trimLineBreaks(string: string): string;
/**
 * Designed originally to flatten style definitions
 * @param {String} string String to trim
 * @returns {String}
 */
export function trimWhitespace(string: string): string;
/**
 *   Truncates string with ellipsis if over the max, note use framework function
 *   if you need to know the effects of the truncate process (returns an object
 *   with info instead) this function only modifies the string
 *   @param  {string} string    String to possibly truncate
 *   @param  {number} max       How many characters max?
 *   @return {string}
 */
export function truncate(string: string, max: number, overflowChar?: string): string;
//# sourceMappingURL=string.d.ts.map