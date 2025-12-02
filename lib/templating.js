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
export function normalizeClasses(inputClasses) {
  const classes = new Set();

  if (!inputClasses) {
    return classes; // Return empty set if null/undefined/empty
  }

  if (typeof inputClasses === "string") {
    // Split string by space to handle multiple classes like "class1 class2"
    inputClasses.split(" ").forEach(cls => {
      if (cls) classes.add(cls);
    });
  } else if (Array.isArray(inputClasses)) {
    inputClasses.forEach(item => {
      // Recursively normalize items within the array (supports [{ "active": true }, "static"])
      normalizeClasses(item).forEach(cls => classes.add(cls));
    });
  } else if (typeof inputClasses === "object") {
    // Handle object syntax { "class-name": condition }
    for (const key in inputClasses) {
      if (Object.prototype.hasOwnProperty.call(inputClasses, key) && inputClasses[key]) {
        if (key) classes.add(key); // Add key if its value is truthy and key is not empty
      }
    }
  }

  return classes;
}

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
export function normalizeClassString(classes) {
  const classSet = normalizeClasses(classes);
  return [...classSet].join(" ");
}

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
export function when(cond, callback, fallback = "") {
  return cond ? callback(cond) : fallback;
}

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
export function optional(value, fallback = "") {
  return value ? value : fallback;
}
