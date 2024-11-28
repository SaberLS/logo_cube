/**
 * Retrieves the computed style of a specified element property.
 *
 * @function computedStyle
 * @param {HTMLElement} element - The HTML element whose style needs to be retrieved.
 * @param {string} property - The name of the CSS property whose value is to be retrieved.
 * @returns {string} The value of the specified CSS property for the given element.
 *
 * @example
 * // Example usage:
 * const element = document.querySelector('.my-element');
 * const backgroundColor = computedStyle(element, 'background-color');
 * console.log(backgroundColor); // Outputs: "rgb(255, 255, 255)"
 */
export default function computedStyle (element, property) {
  return window.getComputedStyle (element)[property]
}
