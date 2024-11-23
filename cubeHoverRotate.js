import getTransitionDuration from './getTransitionDuration.js'

/**
 * Represents a 3D Cube with interactive features.
 *
 * @class Cube
 * @param {HTMLElement} cube - The HTML element representing the cube.
 */
class Cube {

  constructor (cube) {

    /**  @member {HTMLElement} - The HTML element representing the cube.*/
    this.main = cube

    /**  @member {number} - `timeoutID` used to `cancelTimeout()` delayed rotation */
    this.willRotate = 0

    /**  @member {number} - `timeoutID` used to `cancelTimeout()` delayed rotation */
    this.transitionDuration = this.getTransitionDuration ()
    // ----------------- Events ----------------- \\
    this.main.addEventListener (
      'animationcancel',
      () => {
        // console.log('animationcancel');
        this.setDefaultTransform () // 3. Starts transition which reverses the .rotate animation
      },
    )

    this.main.addEventListener (
      'mouseover',
      ({target}) => {
        this.stop ()
        target.classList.add ('select')
      },
    )

    this.main.addEventListener (
      'mouseout',
      (event) => {
        this.rotate (event)
        event.target.classList.remove ('select')
      },
    )
  }

  /**
   * Rotates the cube based on the mouse out event.
   *
   * @param {HTMLElement} event.relatedTarget - The element the mouse is moving to.
   */
  rotate = ({'relatedTarget': movedTo}) => {
    // console.log('mouse out');
    // console.log(movedTo);

    this.willRotate = setTimeout (
      () => {
        // if cursor was moved out of window or on element which is not part of cube
        if (movedTo === null || !movedTo.classList.contains ('face')) {
          // console.log('rotate');
          // console.log(this.main.style);
          this.main.style.transform = '' // set transform to default value
          this.main.classList.add ('rotate') // start rotate animation
        }

      },
      this.transitionDuration,
    )

  }

  /**
   * Stops the cube's rotation. at current rotation animation state.
   */
  stop = () => {
    if (this.isRotating ()) {
      // 1. set transform to current computed value to stop at current animation state
      this.main.style.transform = this.getComputedTransform ()

      // 2. cancel animation
      this.main.classList.remove ('rotate')

    } else { // If the cube is not rotating but a rotation is scheduled (due to a recent mouseout event), it cancels that scheduled rotation.
      clearTimeout (this.willRotate)
    }
  }

  /**
   * Checks if the cube is currently rotating.
   *
   * @returns {boolean} - True if the cube is rotating, false otherwise.
   */
  isRotating () {
    return this.main.classList.contains ('rotate')
  }

  /**
   * Retrieves the current computed transform value of the cube.
   *
   * @returns {string} - The current computed transform value.
   */
  getComputedTransform () {
    return window.getComputedStyle (this.main).transform
  }

  /**
 * Resets the cube's transform style to its default value.
 *
 * This method clears any existing transform styles applied to the cube,
 * effectively resetting it to its original position and orientation.
 *
 * @returns {void} This method does not return a value.
 */
  setDefaultTransform () {
    this.main.style.transform = ''
  }

  /**
   * Retrieves the transition duration of the cube's rotate animation.
   *
   * @returns {number} - The transition duration in milliseconds.
   */
  getTransitionDuration () {
    return getTransitionDuration (this.main)
  }

}


// eslint-disable-next-line no-unused-vars
const cube = new Cube (document.querySelector ('.cube'))
