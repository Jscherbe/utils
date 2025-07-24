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
export function safeParse(jsonString: string, defaultValue?: any, onError?: (arg0: Error, arg1: string) => void): any;
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
export function parse(jsonString: string, onFail?: (arg0: Error, arg1: string) => void): any;
//# sourceMappingURL=json.d.ts.map