const slider = document.querySelector(".slider__input");
const image = document.querySelector(".slider__image");
const box = document.getElementById("box");

let timeout;

slider.addEventListener("input", (e) => {
  clearTimeout(timeout);

  timeout = setTimeout(() => {
    image.style.width = e.target.value + "%";
  }, 200);
});

const moveBox = _.debounce((event) => {
  box.style.left = event.clientX + "px";
  box.style.top = event.clientY + "px";
}, 100);

document.addEventListener("mousemove", moveBox);
