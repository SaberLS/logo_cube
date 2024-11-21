class Cube {

  constructor (cube) {
    this.cube = cube;

    this.cube.addEventListener(
      'animationcancel',
      () => {
        this.cube.style.transform = '';
        console.log('animationcancel');
      }
    );

    this.cube.addEventListener(
      'mouseover',
      this.stopOnHoover
    );

    this.cube.addEventListener(
      'mouseout',
      this.rotateOnOut
    );
  }

  rotate () {
    console.log('rotate');
    this.cube.classList.add('rotate');
  }

  stop = () => {
    console.log('stop');

    this.cube.style.transform = this.getComputedTranform();

    this.cube.classList.remove('rotate');
  };

  stopOnHoover = () => {
    console.log('hoover');

    if (this.cube.classList.contains('rotate')) {
      this.stop();
    }
  };

  rotateOnOut = ({'relatedTarget': movedTo}) => {
    console.log('out');

    console.log(movedTo);
    if (movedTo === null || !movedTo.classList.contains('face')) {
      this.cube.style.transform = '';
      this.rotate();
    }
  };

  getComputedTranform () {
    return window.getComputedStyle(this.cube).transform;
  }
}
// eslint-disable-next-line no-unused-vars
const cube = new Cube(document.querySelector('.cube'));
