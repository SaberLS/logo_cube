class Cube {

  constructor (cube) {
    this.cube = cube;

    this.cube.addEventListener(
      'animationcancel',
      () => {
        // console.log('animationcancel');
        this.cube.style.transform = ''; // set transform to default value. Starts transition which reverses the .rotate animation
      }
    );

    this.cube.addEventListener(
      'mouseover',
      this.stop
    );

    this.cube.addEventListener(
      'mouseout',
      this.rotate
    );
  }

  rotate = ({'relatedTarget': movedTo}) => {
    // console.log('mouse out');
    // console.log(movedTo);

    // if cursor was moved out of windo or on element which is not part of cube
    if (movedTo === null || !movedTo.classList.contains('face')) {
      // console.log('rotate');
      this.cube.style.transform = ''; // set transform to default value
      this.cube.classList.add('rotate'); // start rotate animation
    }
  };

  stop = () => {
    // console.log('hoover');


    if (this.isRotating()) {
      // console.log('stop');
      // 1. set transform to current computed value to stop at current animation state
      this.cube.style.transform = this.getComputedTranform();

      // 2. cancel animation
      this.cube.classList.remove('rotate');
    }
  };

  isRotating () {
    return this.cube.classList.contains('rotate');
  }

  getComputedTranform () {
    return window.getComputedStyle(this.cube).transform;
  }
}
// eslint-disable-next-line no-unused-vars
const cube = new Cube(document.querySelector('.cube'));
