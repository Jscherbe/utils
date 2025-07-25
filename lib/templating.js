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