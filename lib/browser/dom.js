/**
 * @module browser/dom
 */

import { jsonString as regexJsonString } from "../regex.js";
import { safeParse } from "../json.js";

/**
 * Determine if the script is executing in a browser environment
 * @returns {Boolean}
 */
export function isBrowser() {
  return typeof window !== "undefined" && typeof window.document !== "undefined";
}

/**
 * Remove HTML elements from string
 * @param {String} html Source HTML
 * @returns {String} String version
 */
export function stripHtmlTags(html) {
  const parseHTML = new DOMParser().parseFromString(html, "text/html");
  const text = parseHTML.body.textContent || "";
  // Replace inline tags
  return text.replace(/<\/?[^>]+(>|$)/gi, "");
}

/**
 *   Returns an array of direct descendants
 *   @param  {Node}   element
 *   @param  {String} selector
 *   @return {Array}
 */
export function getDirectDescandants(element, selector) {
  return [...element.children].filter(child => child.matches(selector));
}

/**
 *   Checks if element is overflown vertically
 *   @param  {Node}  element
 *   @return {Boolean}
 */
export function isOverflownY(element) {
  return element.scrollHeight > element.clientHeight;
}

/**
 *   Checks if element is overflown both vertically and horizontally
 *   @param  {Node}  element
 *   @return {Boolean}
 */
export function isOverflown(element) {
  return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}

/**
 * For a given element return the first parent that has scrollable overflow
 * - Helpful for debugging position sticky
 * @param {Node} node Node to start search for first scrollable parent
 * @returns {Node}
 * @example
 *   const $navcontent = document.querySelector(".nav__content");
 *   if ($navcontent) {
 *     console.log(getScrollParent($navcontent));
 *   }
*/
export function getScrollParent(node) {
  if (node == null) {
    return null;
  }
  if (node.scrollHeight > node.clientHeight) {
    return node;
  } else {
    return getScrollParent(node.parentNode);
  }
}

/**
 *   Returns reliable document height
 *   @return {number}
 */
export function documentHeight() {
  return Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );
}


/**
 *   Returns reliable window height
 *   @return {number}
 */
export function windowHeight() {
  return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
}

/**
 *   Returns reliable window width
 *   @return {number}
 */
export function windowWidth() {
  return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
}

/**
 * Returns Node List from HTML markup string
 * @param {String} markup HTML markup to create into an element
 */
export function createElementFromHtml(markup) {
  const doc = new DOMParser().parseFromString(markup, "text/html");
  return doc.body.firstElementChild;
}

/**
 * Creates a new element with attributes and children
 * @param {Object} config Configuration object
 * @param {String} config.tag Node type (ie 'div')
 * @param {Object} config.attributes Attributes to add to the new element
 * @param {Array} config.children Array of children to append into the new element
 */
export function composeElement(config) { // tag, attributes = {}, children
  const { tag, attributes, children } = config;
  const element = document.createElement(tag);
  if (attributes) {
    Object.entries(attributes).forEach((a, v) => element.setAttribute(a, v));
  }
  if (children) {
    children.forEach(c => element.appendChild(c));
  }
  return element;
}

/**
 * Get an elements JSON dataset value
 * - Falls to empty object if no json passed
 * @param {Node} element 
 * @param {String} key key in dataset object for element
 * @param {*} [defaultValue={}] Value to fallback to if no JSON
 * @returns {Object} Empty object or JSON object from dataset
 */
export function getDatasetJson(element, key, defaultValue = {}) {
  const passed = element.dataset[key];
  return safeParse(passed, defaultValue, (error) => {
    console.error(`Error getting JSON from dataset (${ key }) -- "${ passed }"\n`, element, error);
  });
}

/**
 * Get an elements JSON dataset value that could potentially just be a single string
 * - If JSON it will return the object else it will return the value directly
 * @param {Node} element 
 * @param {String} key key in dataset object for element
 * @returns {Object|String} JSON object or current dataset value (string or empty string if no value)
 */
export function getDatasetOptionalJson(element, key) {
  const passed = element.dataset[key];
  if (passed && regexJsonString.test(passed.trim())) {
    return getDatasetJson(element, key);
  } else {
    return passed;
  }
}

/**
 * Check if a pointer event x/y was outside an elements bounding box
 * @param {Node} element - Element to test against
 * @param {Event} event - Event object for (pointer related events)
 */
export function wasClickOutside(element, event) {
  const rect = element.getBoundingClientRect();
  return (event.clientY < rect.top || // above
    event.clientY > rect.top + rect.height || // below
    event.clientX < rect.left || // left side
    event.clientX > rect.left + rect.width); // right side
}

/**
 * Resolve a target to Element
 * @param {String|Node} target The selector or node/element
 * @param {Object} context [document] The context to query possible selectors from
 * @return {HTMLElement} The element or null if not found
 */
export function getElement(target, context = document) {
  if (typeof target === "string") {
    return context.querySelector(target);
  } else if (target instanceof Element) {
    return target;
  } else {
    console.warn("getElement: Invalid target type (expected String/Node)", target);
    return null;
  }
} 

/**
 * Resolve a target to Elements
 * @param {String|Node} target The selector or node/element
 * @param {Object} context [document] The context to query possible selectors from
 * @return {Array} The elements or null if not found
 */
export function getElements(target, context = document) {
  if (typeof target === "string") {
    return [...context.querySelectorAll(target)];
  } else if (target instanceof Element) {
    return [target];
  } else if (Array.isArray(target) || target instanceof NodeList) {
    return [...target];
  } else {
    console.warn("getElement: Invalid target type (expected String/Node/Array/Node List)", target);
    return null;
  }
} 


/**
 * Sets a CSS custom property equal to the scrollbar width.
 * @param {object} options - Configuration options.
 * @param {HTMLElement} [options.scrollableChild=document.body] - An element that is a child of a scrollable container (used for width calculation).
 * @param {Window|HTMLElement} [options.container=window] - The container that can be scrolled (used for width calculation).
 * @param {HTMLElement} [options.propertyElement=document.documentElement] - The element to which the custom property will be added. Defaults to document.documentElement for :root access.
 * @param {string} [options.propertyName="--ulu-scrollbar-width"] - The name of the custom property to set.
 */
export function addScrollbarCustomProperty(options) {
  const defaults = {
    scrollableChild: document.body,
    container: window,
    propertyElement: document.documentElement,
    propertyName: "--ulu-scrollbar-width",
  };

  const config = { ...defaults, ...options };
  const { scrollableChild, container, propertyElement, propertyName } = config;

  const scrollbarWidth = getScrollbarWidth(scrollableChild, container);
  propertyElement.style.setProperty(propertyName, `${ scrollbarWidth }px`);
}

/**
 * Calculates the width of the scrollbar.
 *
 * @param {HTMLElement} [element=document.body] -The element that is the child of a scrollable container
 * @param {Window|HTMLElement} [container=window] - The container that can be scrolled
 * @returns {number} The width of the scrollbar in pixels.
 */
export function getScrollbarWidth(element = document.body, container = window) {
  return container.innerWidth - element.clientWidth;
}

/**
 * Prevents scrolling on the document body and optionally compensates for scrollbar shift.
 * Caches original body styles and returns a function to restore them.
 *
 * @param {Object} config Object of options/arguments
 * @param {HTMLElement} [config.container=document.body] - Container to prevent scroll on (defaults to document.body)
 * @param {Boolean} [config.preventShift=false] If true, adds padding-right to the container equal to the scrollbar width to prevent layout shift, defaults to false
 * @returns {Function} A restore/cleanup function that restores the original body styles.
 */
export function preventScroll({ preventShift = false, container = document.body }) {
  const cacheOverflow = container.style.overflow;
  const cachePaddingRight = container.style.paddingRight;

  container.style.overflow = "hidden"; // Apply no scroll

  // Compensate for scrollbar shift if enabled
  if (preventShift) {
    const scrollbarWidth = getScrollbarWidth();
    if (scrollbarWidth > 0) { // Only apply if a scrollbar is actually present
      const paddingRightValue = parseInt(cachePaddingRight || "0px", 10);
      container.style.paddingRight = `${ paddingRightValue + scrollbarWidth }px`;
    }
  }

  /**
   * Restores the body's original overflow and padding-right styles.
   * This function should be called when scrolling is no longer prevented.
   */
  return () => {
    container.style.overflow = cacheOverflow;
    container.style.paddingRight = cachePaddingRight;
  };
}