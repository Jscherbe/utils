/**
 * @module browser/clipboard
 */
/**
 * Copy text to clipboard
 * - This uses the outdated/deprecated "execCommand" for non https environments if
 *   window.navigator.clipboard is unavailable
 * @param {String} text Text to copy to clipboard
 * @return {Promise} A promise that will resolve once copy is successful or fails
 */
export function copyText(text: string): Promise<any>;
//# sourceMappingURL=clipboard.d.ts.map