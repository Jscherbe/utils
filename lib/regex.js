/**
 * @module regex
 */


export const linebreaks = /(\r\n|\n|\r)/gm;
export const multiSpace = /\s+/g;
export const htmlTag = /<\/?[^>]+(>|$)/g;