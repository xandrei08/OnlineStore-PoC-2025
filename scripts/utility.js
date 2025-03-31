export function createImages(img, attribute, classes, container) {
  let image = document.createElement("img");
  image.src = img;
  image.setAttribute("alt", attribute);
  image.classList.add(...classes.split(" "));
  container.appendChild(image);
  return container;
}

export function createURL(element, container) {
  const newURL = new URL(element).pathname;
  container.src = newURL;
  return container;
}
