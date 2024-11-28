/**
 * Converts a string duration in seconds to milliseconds.
 *
 * @param {string} string - The string duration in seconds. The string should end with 's'.
 * @returns {number} The duration in milliseconds. If the input string is empty, returns 0.
 *
 * @example
 * // Example usage:
 * const durationString = '0.5s';
 * const durationMs = toMs(durationString);
 * console.log(durationMs); // Outputs: 500
 *
 * @example
 * // Example usage with an empty string:
 * const emptyString = '';
 * const emptyDurationMs = toMs(emptyString);
 * console.log(emptyDurationMs); // Outputs: 0
 */
export default function toMs (string = '') {
  // If string is empty returns 0.
  if (string === '') return 0

  // Convert the string duration to milliseconds by removing the "s" suffix and multiplying by 1000.
  return string.
    slice (
      0,
      string.length - 1,
    ) * 1000
}
