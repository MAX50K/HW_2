const slider = document.querySelector(".slider__input");
const image = document.querySelector(".slider__image");
const box = document.getElementById("box");

const updateImageSize = _.debounce((value) => {
  image.style.width = value * 3 + "px";
}, 150);

const moveBox = _.debounce((event) => {
  box.style.left = event.clientX + "px";
  box.style.top = event.clientY + "px";
}, 100);

slider.addEventListener("input", (e) => {
  updateImageSize(e.target.value);
});
document.addEventListener("mousemove", moveBox);
