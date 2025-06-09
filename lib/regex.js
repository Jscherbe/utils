/**
 * @module regex
 */

/**
 * Match line break characters (global multiline)
 */
export const linebreaks = /(\r\n|\n|\r)/gm;
/**
 * Match multiple spaces (global)
 */
export const multiSpace = /\s+/g;
/**
 * Match html tag (global)
 */
export const htmlTag = /<\/?[^>]+(>|$)/g;
/**
 * Match whitespace characters that appear immediately before (global multiline)
 */
export const whitespaceBeforeHtml = /^\s+(?=<[a-zA-Z][a-zA-Z0-9]*[^>]*>|<\/[a-zA-Z][a-zA-Z0-9]*\s*>)/gm;