const slider = document.querySelector(".slider__input");
const image = document.querySelector(".slider__image");

let timeout;

slider.addEventListener("input", (e) => {
  clearTimeout(timeout);

  timeout = setTimeout(() => {
    image.style.width = e.target.value + "%";
  }, 200);
});
