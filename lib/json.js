/**
 * @module json
 */

/**
 * Safely parses a JSON string, returning a default value on error.
 * This function provides an optional callback for custom error handling.
 *
 * @param {string} jsonString - The string to parse.
 * @param {any} [defaultValue={}] - The value to return if parsing fails.
 * @param {function(Error, string): void} [onError=null] - Optional callback function called with the error and the original string if parsing fails.
 * If not provided, a console warning will be logged by default.
 * Pass `() => {}` to suppress all logging.
 * @returns {any} The parsed JSON object, or the defaultValue if parsing fails.
 */
export function safeParse(jsonString, defaultValue = {}, onError = null) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    if (typeof onError === "function") {
      onError(error, jsonString); // Let the caller handle the error
    } else {
      // Default behavior if no custom onError is provided
      console.warn("safeParse: Failed to parse JSON string:", jsonString, "Error:", error);
    }
    return defaultValue;
  }
}

/**
 * Parses a JSON string.
 * This function will throw an error if the input string is not valid JSON,
 * similar to how JSON.parse() behaves.
 * It also provides an optional callback that runs BEFORE the error is re-thrown.
 *
 * @param {string} jsonString - The string to parse as JSON.
 * @param {function(Error, string): void} [onFail=null] - Optional callback function called with the error and the original string if parsing fails, before the error is re-thrown.
 * @returns {any} The parsed JavaScript object or value.
 * @throws {SyntaxError} If the string is not valid JSON.
 */
export function parse(jsonString, onFail = null) {
  try {
    const parsed = JSON.parse(jsonString);
    return parsed;
  } catch (error) {
    if (typeof onFail === "function") {
      onFail(error, jsonString); // Allow custom handling before re-throwing
    } else {
      // Default behavior if no custom onFail is provided
      console.error("parse: Error parsing JSON string:", jsonString, "Error:", error);
    }
    throw error; // Always re-throw the original error for 'parse'
  }
}