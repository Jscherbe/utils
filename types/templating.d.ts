/**
 * @module templating
 * Functions that are primarily used for templating (vue, static sites, etc)
 */
/**
 * Helper function to process various Vue like class binding types
 * - Used for modifiers
 * - Handles same structure as Vue class bindings
 * @param {Object|Array|String}
 * @return {Set} Set of unique classnames
 */
export function normalizeClasses(inputClasses: any): Set;
/**
 * Creates a class string from various sources (arrays, objects, strings).
 * A convenience wrapper for `normalizeClasses` that returns a string.
 * @param {Object|Array|String} classes The classes to process.
 * @returns {String} A space-separated class string.
 * @example
 *   // normalizeClassString(['button', isPrimary && 'is-primary', 'large'])
 *   // -> "button is-primary large" or "button large"
 *
 *   // normalizeClassString({ button: true, 'is-active': isActive })
 *   // -> "button is-active" or "button"
 */
export function normalizeClassString(classes: any | any[] | string): string;
/**
 * Conditionally executes a callback, ideal for logic within template literals.
 * If the condition is truthy, the callback is executed and its result is returned.
 * Otherwise, the fallback value is returned.
 *
 * @param {*} cond The condition to evaluate.
 * @param {Function} callback Function to execute if `cond` is truthy. It receives `cond` as its argument.
 * @param {*} [fallback=""] Value to return if `cond` is falsy. Defaults to an empty string.
 * @returns {*} The result of `callback(cond)` if `cond` is truthy, otherwise the `fallback` value.
 * @example
 *   const user = { name: "Joe" };
 *   const guest = null;
 *
 *   // Example with a truthy condition:
 *   const welcomeUser = `<div>${when(user, u => `Welcome, ${u.name}`)}...`;
 *   // welcomeUser is "<div>Welcome, Joe..."
 *
 *   // Example with a falsy condition and a custom fallback:
 *   const welcomeGuest = `<div>${when(guest, g => `Welcome, ${g.name}`, "Welcome, Guest!")}</div>`;
 *   // welcomeGuest is "<div>Welcome, Guest!</div>"
 */
export function when(cond: any, callback: Function, fallback?: any): any;
/**
 * Returns a value if it is truthy, otherwise returns a fallback.
 * A simpler version of `when()` for template literals where you only need to output a value as-is.
 * @param {*} value The value to check.
 * @param {*} [fallback=""] The value to return if `value` is falsy. Defaults to an empty string.
 * @returns {*} The `value` if it's truthy, otherwise the `fallback`.
 * @example
 *   // Optional class name
 *   const className = `item ${optional(activeClass)}`;
 *
 *   // Providing a default for an optional name
 *   const displayName = `Welcome, ${optional(user.name, "Guest")}!`;
 */
export function optional(value: any, fallback?: any): any;
//# sourceMappingURL=templating.d.ts.map