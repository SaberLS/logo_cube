import toMs from './toMs.mjs'
import computedStyle from '../computedStyle.mjs'

/**
 * Calculates the transition duration of an element in milliseconds.
 *
 * @param {HTMLElement} element - The HTML element to check for transition duration.
 * @returns {number} The transition duration in milliseconds.
 */
export default function getTransitionDuration (element) {
  // String representing the duration, in seconds (e.g., "0.5s").
  const durationString = computedStyle (
    element,
    'transition-duration',
  )

  // String representing the delay, in seconds
  const delayString = computedStyle (
    element,
    'transition-delay',
  )

  return toMs (durationString) + toMs (delayString)
}


