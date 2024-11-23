/**
 * Calculates the transition duration of an element in milliseconds.
 *
 * @param {HTMLElement} element - The HTML element to check for transition duration.
 * @returns {number} The transition duration in milliseconds.
 */
export default function getTransitionDuration (element) {
  // This returns a string representing the duration, typically in seconds (e.g., "0.5s").
  const durationString = window.getComputedStyle (element)['transition-duration']

  // If the element does not have a transition-duration, it returns 0.
  if (durationString === '') return 0

  // Convert the string duration to milliseconds by removing the "s" suffix and multiplying by 1000.
  const timeout = durationString.
    slice (
      0,
      durationString.length - 1,
    ) * 1000
  return timeout
}
