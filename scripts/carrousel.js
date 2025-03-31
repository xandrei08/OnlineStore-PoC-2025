import { createURL } from "./utility.js";

function switchImage() {
  const modal = document.querySelectorAll(".modal");
  const mainImage = document.querySelector(".main-image");
  const firstImage = document.querySelector(".first-image").src;
  const secondImage = document.querySelector(".second-image").src;
  const thirdImage = document.querySelector(".third-image").src;
  modal.forEach((element) => {
    element.addEventListener("click", (e) => {
      if (
        e.target.src === firstImage ||
        e.target.src === secondImage ||
        e.target.src === thirdImage
      ) {
        createURL(e.target.src, mainImage);
      } else {
        return mainImage;
      }
    });
  });
}

export default switchImage;
