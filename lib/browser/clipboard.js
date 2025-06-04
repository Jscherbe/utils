/**
 * @module browser/clipboard
 */


/**
 * Copy text to clipboard
 * - This uses the outdated copyTextToExecCommand for non https environments if 
 *   window.navigator.clipboard is unavailable
 * @param {String} text Text to copy to clipboard
 * @return {Promise} A promise that will resolve once copy is successful or fails
 */
export async function copyTextToClipboard(text) {
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
        copyTextToExecCommand(text);
        resolve();
      } catch (err) {
        console.error(err);
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
function copyTextToExecCommand(text) {
  const element = document.createElement("textarea");
  element.value = text;
  element.setAttribute("readonly", "");
  element.style.position = "absolute";
  element.style.left = "-9999px";
  document.body.appendChild(element);
  element.select();
  document.execCommand("copy");
  document.body.removeChild(element);
}
