const cube = document.querySelector(".cube");

function unRotate() {
  console.log("mouseover");
  cube.removeEventListener("mouseover", unRotate);
  const { transform: matrix } = window.getComputedStyle(cube);
  cube.classList.remove("rotate");

  cube.addEventListener("animationcancel", cancel.bind(this, [matrix]));
  cube.addEventListener("mouseout", rotate);
}

function cancel(matrix) {
  console.log("cancel");
  cube.removeEventListener("animationcancel", cancel);
  cube.style.transform = matrix;
  cube.style.transform = "rotateX(0deg) rotateY(0deg)";
}

function rotate() {
  console.log("mouseout");
  cube.classList.add("rotate");
  cube.removeEventListener("mouseout", rotate);
  cube.addEventListener("mouseover", unRotate);
}

cube.addEventListener("mouseover", unRotate);
