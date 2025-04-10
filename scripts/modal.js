import { createImages } from "./utility.js";
import switchImage from "./carrousel.js";
import { addItemToCart } from "./addItem.js";

// Modal main body
const imgData = {
  image: "",
  title: "",
  description: "",
  price: "",
  soldBy: "",
  bannerImage: "./assets/banner.png",
};

//Object of Images to show up while modal is open
const imageObject = {
  tShirts: [
    {
      src: "./assets/tshirt.png",
      alt: "Blue T-shirt",
      class: "first-image bg-gray-300 cursor-pointer",
    },
    {
      src: "./assets/blueTshirt.png",
      alt: "Blue T-shirt",
      class: "second-image bg-gray-300 cursor-pointer",
    },
    {
      src: "./assets/blackTshirt.png",
      alt: "Black T-shirt",
      class: "third-image bg-gray-300 cursor-pointer",
    },
  ],
  jackets: [
    {
      src: "./assets/jacket.png",
      alt: "Blue Jacket",
      class: "first-image bg-gray-300 cursor-pointer",
    },
    {
      src: "./assets/blueJacket.png",
      alt: "Blue Jacket",
      class: "second-image bg-gray-300 cursor-pointer",
    },
    {
      src: "./assets/greenJacket.png",
      alt: "Green Jacket",
      class: "third-image bg-gray-300 cursor-pointer",
    },
  ],
  jeans: [
    {
      src: "./assets/jeans.png",
      alt: "Orange Jeans",
      class: "first-image bg-gray-300 cursor-pointer",
    },
    {
      src: "./assets/orangeJeans.png",
      alt: "Orange Jeans",
      class: "second-image bg-gray-300 cursor-pointer",
    },
    {
      src: "./assets/yellowJeans.png",
      alt: "Yellow Jeans",
      class: "third-image bg-gray-300 cursor-pointer",
    },
  ],
};

// Creating images loop to add all elements from imageObject.
function getImages(target) {
  const modalmages = document.querySelector(".first-row");
  const category = target.getAttribute("data-category");
  if (category === "tshirt") {
    imageObject.tShirts.forEach((element) => {
      createImages(element.src, element.alt, element.class, modalmages);
    });
  } else if (category === "jacket") {
    imageObject.jackets.forEach((element) => {
      createImages(element.src, element.alt, element.class, modalmages);
    });
  } else if (category === "jeans") {
    imageObject.jeans.forEach((element) => {
      createImages(element.src, element.alt, element.class, modalmages);
    });
  } else {
    alert("it doesnt'work");
  }
}
//function to close modal
function closeModal() {
  const closeElement = document.querySelector(".close-modal");
  const mainContainer = document.querySelector(".cards-box");
  const modal = document.querySelector(".card-modal");
  closeElement.addEventListener("click", () => {
    mainContainer.removeChild(modal);
  });
}
//Main function to export, that on click open the modal.
function getCardData() {
  const modal = Array.from(document.querySelectorAll(".cards-body"));
  modal.forEach((element) => {
    element.addEventListener("click", () => {
      const imageSrc = element.querySelector("img").src;
      imgData.image = new URL(imageSrc).pathname;
      imgData.title = element.querySelector(".card-title").textContent;
      imgData.description =
        element.querySelector(".card-description").textContent;
      imgData.price = element.querySelector(".price").textContent;
      imgData.soldBy = element.querySelector(".seller-name").textContent;
      showModal();
      getImages(element);
      closeModal();
      switchImage();
      addItemToCart();
    });
  });
}

//Show modal on click
function showModal() {
  const mainContainer = document.querySelector(".cards-box");
  const createModal = document.createElement("div");
  createModal.classList.add(
    "card-modal",
    "flex",
    "flex-row",
    "justify-center",
    "text-center",
    "w-screen",
    "h-screen",
    "fixed",
    "left-0",
    "top-0",
    "backdrop-blur-sm"
  );

  createModal.innerHTML = `
 <div
      class="card-modal flex flex-row justify-center text-center w-screen h-screen fixed left-0 top-0 backdrop-blur-sm items-center"
    >
      <div
        class="modal flex flex-row bg-white w-fit absolute top-[5vh] rounded-4xl border-1 border-amber-500 py-4"
      >
        <div class="first-row flex flex-col flex-[1] justify-center gap-8 mx-6">
        </div>
        <div
          class="second-row flex flex-col flex-[3] justify-center items-center gap-6"
        >
          <img src="${imgData.image}" alt="" class="main-image w-xl bg-gray-300 cursor-pointer" />
          <div class="modal-banner flex flex-col">
            <img src="${imgData.bannerImage}" alt="banner image"/>
          </div>
        </div>
        <div
          class="third-row flex flex-col flex-[2] justify-center items-center bg-gray-300 mx-5 my-6 gap-3 py-3"
        >
          <h3 class="sm:text-xl lg:text-3xl font-black">${imgData.title}</h3>
          <p class="sm:text-xl lg:text-2xl font-semibold">${imgData.description}</p>
          <p class="sm:text-xs lg:text-xl font-bold">
            Price: <span class="price-item text-lime-700 font-bold">${imgData.price}</span>
          </p>
          <p class="sm:text-xs lg:text-xl font-bold">
            Seller: <span class="text-lime-700 font-bold">${imgData.soldBy}</span></p>
          </p>
          <label for:"sizes" class="sm:text-xl lg:text-2xl font-bold">Choose size </label>
          <select name="sizes" class="select-size w-fit bg-white outline-amber-300 font-bold"> 
            <option value="xs">XS</option>s
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
          </select>
          <button class="add-product w-fit bg-black text-white sm:text-sm lg:text-xl py-2 px-5 cursor-pointer font-bold hover:outline-1 hover:outline-amber-500">ADD</button>
           <button class="close-modal absolute top-4 right-4 text-white font-bold bg-red-600 text-2xl px-2 cursor-pointer rounded-2xl" aria-label="Close Modal">&times;</button>
        </div>
      </div>
    </div>`;

  mainContainer.append(createModal);
}

export default getCardData;
