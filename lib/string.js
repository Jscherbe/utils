/**
 * @module string
 */

import { htmlTag, multiSpace, linebreaks } from "./regex.js";

/**
 * Capitalize First Letter
 * @param {String} string String to capitolize
 * @returns {String} 
 */
export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Convert string to characters safe for URL
 * @param {String} string The string to convert 
 * @returns {String}
 */
export function urlize(string) {
  var newString;
  string = string.replace(/^[^-_a-zA-Z]+/, "").replace(/^-(?:[-0-9]+)/, "-");
  newString = string && string.replace(/[^-_a-zA-Z0-9]+/g, "-");
  return newString.toLowerCase();
}

/**
 *   Will return an object with the separation details
 *   @param  {String} string CSS number with unit
 *   @return {Object}        keys: value, original, unit
 */
export function separateCssUnit(original) {
  const pattern = /(px|vw|vh|%|em|rem)/i;
  return {
    original,
    value:  original.replace(pattern, ""),
    unit:   original.match(pattern)[0]
  };
}

/**
 * Removes HTML tags from string (can be used in Node)
 * - Different than DOM version
 * - Note you can use document.createElement and grab textContent (but this could execute code in browser)
 * - The method below will just use regex without creating Nodes
 * @param {String} html HTML string to find/replace
 */
export function stripTags(html) {
  return html.replace(htmlTag, "");
}

/**
 * Remove double spaces
 * @param {String} string String to trim
 * @returns {String}
 */
export function trimDoubleSpaces(string) {
  return string.replace(multiSpace, "");
}

/**
 * Remove line breaks
 * @param {String} string String to trim
 * @returns {String}
 */
export function trimLineBreaks(string) {
  return string.replace(linebreaks, "");
}


/**
 * Designed originally to flatten style definitions
 * @param {String} string String to trim
 * @returns {String}
 */
export function trimWhitespace(string) {
  return string.replace(linebreaks, "")
    .replace(multiSpace, " ")
    .trim();
}

/**
 *   Truncates string with ellipsis if over the max, note use framework function
 *   if you need to know the effects of the truncate process (returns an object 
 *   with info instead) this function only modifies the string
 *   @param  {string} string    String to possibly truncate
 *   @param  {number} max       How many characters max?
 *   @return {string}     
 */
export function truncate(string, max, overflowChar = "…") {
  return string.length <= max ? string : string.slice(0, max) + overflowChar;
}
