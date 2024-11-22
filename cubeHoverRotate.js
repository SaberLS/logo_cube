class Cube {

  constructor (cube) {
    this.main = cube;
    this.willRotate = setTimeout(
      () => {},
      1
    );

    this.main.addEventListener(
      'animationcancel',
      () => {
        // console.log('animationcancel');
        this.main.style.transform = ''; // set transform to default value. Starts transition which reverses the .rotate animation
      }
    );

    this.main.addEventListener(
      'mouseover',
      this.stop
    );

    this.main.addEventListener(
      'mouseout',
      this.rotate
    );
  }

  rotate = ({'relatedTarget': movedTo}) => {
    // console.log('mouse out');
    // console.log(movedTo);

    // if cursor was moved out of windo or on element which is not part of main
    this.willRotate = setTimeout(
      () => {
        if (movedTo === null || !movedTo.classList.contains('face')) {
          // console.log('rotate');
          // console.log(this.main.style);
          this.main.style.transform = ''; // set transform to default value
          this.main.classList.add('rotate'); // start rotate animation
        }

      },
      800 // TODO make this computed transform.duration
    );

  };

  stop = () => {
    console.log('hoover');

    if (this.isRotating()) {
      // console.log('stop');
      // 1. set transform to current computed value to stop at current animation state
      this.main.style.transform = this.getComputedTranform();

      // 2. cancel animation
      this.main.classList.remove('rotate');
    } else { // if this is not currently rotating clear timeout
      clearTimeout(this.willRotate);
    }
  };

  isRotating () {
    return this.main.classList.contains('rotate');
  }

  getComputedTranform () {
    return window.getComputedStyle(this.main).transform;
  }
}
// eslint-disable-next-line no-unused-vars
const cube = new Cube(document.querySelector('.cube'));
