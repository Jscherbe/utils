# @ulu/utils

A lightweight, tree-shakable collection of modern JavaScript (ESM) utility functions. Designed for use in any JavaScript project, with specific helpers for browser and Node.js environments.

- [Documentation](https://jscherbe.github.io/utils/)
- [Change Log](CHANGELOG.md)

## Features

This library is split into several modules, so you only import what you need.

- **`array.js`**: Functions for array manipulation like `arrayHas`, `arrayCreate`, `removeDuplicates`, and `filterInPlace`.
- **`browser/clipboard.js`**: A simple promise-based `copyText` function for clipboard interactions.
- **`browser/dom.js`**: Helpers for DOM manipulation, including `getScrollParent`, `preventScroll`, `wasClickOutside`, and `getDatasetJson`.
- **`browser/performance.js`**: Browser-specific performance utilities like `runAfterFramePaint` and `debounceAnimationFrame`.
- **`browser/print.js`**: Functions to print HTML content or specific DOM elements.
- **`date.js`**: Helpers for date formatting, like `prettyDate`.
- **`debug.js`**: Simple utilities for debugging, such as `debugThrough`.
- **`json.js`**: Safe JSON parsing functions.
- **`node/fs.js` & `node/path.js`**: Helpers for working with file paths in Node.js ES Modules (e.g., `resolveFromUrlDir`).
- **`number.js`**: Simple numerical utilities like `isBetween`, `average`, and `sum`.
- **`object.js`**: Helpers for object validation, like `hasRequiredProps`.
- **`performance.js`**: Generic performance utilities like `debounce` and `throttle`.
- **`random.js`**: Functions for generating random values, such as `randomInt`, `randomString`, and `randomArrayItem`.
- **`regex.js`**: A collection of common, pre-compiled regular expressions for reuse.
- **`string.js`**: A rich set of string helpers like `truncate`, `kebabToCamel`, `titleCase`, `urlize`, and `cssDurationToMs`.
- **`templating.js`**: Utilities for templating, such as `normalizeClasses` for handling dynamic CSS classes.

## Usage

Each module can be imported directly to keep your bundles small.

**String Manipulation:**
```js
import { truncate, titleCase } from "@ulu/utils/string.js";

const longText = "This is a very long sentence that needs to be shortened.";
console.log(truncate(longText, 20)); // "This is a very long…"

console.log(titleCase("a tale of two cities")); // "A Tale of Two Cities"
```

**DOM Interaction:**
```js
import { preventScroll } from "@ulu/utils/browser/dom.js";

// Prevent the body from scrolling (e.g., when a modal is open)
const restoreScroll = preventScroll({ preventShift: true });

// Later, to restore scrolling
restoreScroll();
```