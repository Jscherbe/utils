/**
 * Determine if the script is executing in a browser environment
 * @returns {Boolean}
 */
export function isBrowser(): boolean;
/**
 * Remove HTML elements from string
 * @param {String} html Source HTML
 * @returns {String} String version
 */
export function stripHtmlTags(html: string): string;
/**
 *   Returns an array of direct descendants
 *   @param  {Node}   element
 *   @param  {String} selector
 *   @return {Array}
 */
export function getDirectDescandants(element: Node, selector: string): any[];
/**
 *   Checks if element is overflown vertically
 *   @param  {Node}  element
 *   @return {Boolean}
 */
export function isOverflownY(element: Node): boolean;
/**
 *   Checks if element is overflown both vertically and horizontally
 *   @param  {Node}  element
 *   @return {Boolean}
 */
export function isOverflown(element: Node): boolean;
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
export function getScrollParent(node: Node): Node;
/**
 *   Returns reliable document height
 *   @return {number}
 */
export function documentHeight(): number;
/**
 *   Returns reliable window height
 *   @return {number}
 */
export function windowHeight(): number;
/**
 *   Returns reliable window width
 *   @return {number}
 */
export function windowWidth(): number;
/**
 * Returns Node List from HTML markup string
 * @param {String} markup HTML markup to create into an element
 */
export function createElementFromHtml(markup: string): Element;
/**
 * Creates a new element with attributes and children
 * @param {Object} config Configuration object
 * @param {String} config.tag Node type (ie 'div')
 * @param {Object} config.attributes Attributes to add to the new element
 * @param {Array} config.children Array of children to append into the new element
 */
export function composeElement(config: {
    tag: string;
    attributes: any;
    children: any[];
}): HTMLElement;
/**
 * Get an elements JSON dataset value
 * - Falls to empty object if no json passed
 * @param {Node} element
 * @param {String} key key in dataset object for element
 * @param {*} [defaultValue={}] Value to fallback to if no JSON
 * @returns {Object} Empty object or JSON object from dataset
 */
export function getDatasetJson(element: Node, key: string, defaultValue?: any): any;
/**
 * Get an elements JSON dataset value that could potentially just be a single string
 * - If JSON it will return the object else it will return the value directly
 * @param {Node} element
 * @param {String} key key in dataset object for element
 * @returns {Object|String} JSON object or current dataset value (string or empty string if no value)
 */
export function getDatasetOptionalJson(element: Node, key: string): any | string;
/**
 * Check if a pointer event x/y was outside an elements bounding box
 * @param {Node} element - Element to test against
 * @param {Event} event - Event object for (pointer related events)
 */
export function wasClickOutside(element: Node, event: Event): boolean;
/**
 * Resolve a target to Element
 * @param {String|Node} target The selector or node/element
 * @param {Object} context [document] The context to query possible selectors from
 * @return {HTMLElement} The element or null if not found
 */
export function getElement(target: string | Node, context?: any): HTMLElement;
/**
 * Resolve a target to Elements
 * @param {String|Node} target The selector or node/element
 * @param {Object} context [document] The context to query possible selectors from
 * @return {Array} The elements or null if not found
 */
export function getElements(target: string | Node, context?: any): any[];
/**
 * Sets a CSS custom property equal to the scrollbar width.
 * @param {object} options - Configuration options.
 * @param {HTMLElement} [options.scrollableChild=document.body] - An element that is a child of a scrollable container (used for width calculation).
 * @param {Window|HTMLElement} [options.container=window] - The container that can be scrolled (used for width calculation).
 * @param {HTMLElement} [options.propertyElement=document.documentElement] - The element to which the custom property will be added. Defaults to document.documentElement for :root access.
 * @param {string} [options.propertyName="--ulu-scrollbar-width"] - The name of the custom property to set.
 */
export function addScrollbarCustomProperty(options: {
    scrollableChild?: HTMLElement;
    container?: Window | HTMLElement;
    propertyElement?: HTMLElement;
    propertyName?: string;
}): void;
/**
 * Calculates the width of the scrollbar.
 *
 * @param {HTMLElement} [element=document.body] -The element that is the child of a scrollable container
 * @param {Window|HTMLElement} [container=window] - The container that can be scrolled
 * @returns {number} The width of the scrollbar in pixels.
 */
export function getScrollbarWidth(element?: HTMLElement, container?: Window | HTMLElement): number;
/**
 * Prevents scrolling on the document body and optionally compensates for scrollbar shift.
 * Caches original body styles and returns a function to restore them.
 *
 * @param {Object} config Object of options/arguments
 * @param {HTMLElement} [config.container=document.body] - Container to prevent scroll on (defaults to document.body)
 * @param {Boolean} [config.preventShift=false] If true, adds padding-right to the container equal to the scrollbar width to prevent layout shift, defaults to false
 * @returns {Function} A restore/cleanup function that restores the original body styles.
 */
export function preventBodyScroll({ preventShift, container }: {
    container?: HTMLElement;
    preventShift?: boolean;
}): Function;
//# sourceMappingURL=dom.d.ts.map