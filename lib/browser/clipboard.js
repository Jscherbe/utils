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
export async function copyText(text) {
  // Unavailable on http or some security environments
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(text)
      .catch(err => {
        console.error(err);
        throw err;
      });
  } else {
    return new Promise((resolve, reject) => {
      try {
        const success = copyTextExecCommand(text);
        if (success) {
          resolve(); 
        } else {
          // If execCommand returns false, it means the copy operation failed.
          reject(new Error("Copy failed using execCommand fallback (e.g., not allowed in current context)."));
        }
      } catch (err) {
        // This catch block is for unexpected JavaScript errors that might be thrown
        console.error("An error occurred during execCommand fallback mechanism:", err); 
        reject(err); 
      }
    });
  }
}

/**
 * Copy text with the old (now deprecated execCommand)
 * - This is used as a fallback in copyTextToClipboard for non https environments
 * - Do not use in modern sites, not recommended
 * @param {String} text Text to copy to clipboard
 */
function copyTextExecCommand(text) {
  const element = document.createElement("textarea");
  element.value = text;
  element.setAttribute("readonly", "");
  element.style.position = "absolute";
  element.style.left = "-9999px";
  document.body.appendChild(element);
  element.select();

  let success = false;
  try {
    success = document.execCommand("copy"); // Capture the return value!
  } catch (err) {
    // Log any unexpected errors during execCommand, then re-throw.
    console.error("Error during document.execCommand('copy'):", err);
    throw err; // Re-throw so the outer Promise's catch can handle it
  } finally {
    // Ensure the element is removed even if execCommand throws an error
    document.body.removeChild(element);
  }
  return success;
}
