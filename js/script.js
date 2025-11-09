const slider = document.querySelector(".slider__input");
const image = document.querySelector(".slider__image");

const resizeImage = _.debounce((value) => {
  image.style.width = value + "%";
}, 150);

slider.addEventListener("input", (e) => {
  resizeImage(e.target.value);
});

const box = document.getElementById("box");

const moveBox = _.debounce((x, y) => {
  box.style.transform = `translate(${x - 25}px, ${y - 25}px)`;
}, 100);

document.addEventListener("mousemove", (e) => {
  moveBox(e.clientX, e.clientY);
});
