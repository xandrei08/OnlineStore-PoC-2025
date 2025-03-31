const basketContainer = document.querySelector(".basket-items");
let totalToPay = document.querySelector(".total-price");
let cartTotal = [];
let itemId = 0;

export function addItemToCart() {
  const btn = document.querySelector(".add-product");
  const totalContainer = document.querySelector(".total");
  btn.addEventListener("click", (e) => {
    const newItem = document.createElement("div");
    const productImage = document.querySelector(".main-image").src;
    const price = document.querySelector(".price-item").textContent;
    const size = document.querySelector(".select-size").value;
    e.preventDefault();
    cartTotal.push(parseFloat(price.replace("$", "")));
    newItem.classList.add(
      "new-item-container",
      "flex",
      "flex-col",
      "justify-around",
      "gap-8",
      "w-full"
    );
    newItem.innerHTML = `
 <div class="new-item-added flex flex-row justify-around w-full" id=${++itemId}>
   <img src="${productImage}" alt="itemAdded" class="w-[4vw]" />
   <div class="flex flex-row items-center font-bold gap-3">
     <p clsss="size-text">Size <span class="size-selected">${size.toUpperCase()}</span></p>
     <p class="price-text">
       Price:<span class="price-received text-green-500">${price}</span>
     </p>
   </div>
   <div class="count-items flex flex-row items-center gap-3">
     <select name="moreItems">
       <option value="1">1</option>
       <option value="2">2</option>
       <option value="3">3</option>
     </select>
     <i class="remove-item fa-solid fa-trash cursor-pointer"></i>
   </div>
  </div>
 `;
    basketContainer.insertBefore(newItem, totalContainer);
    totalToPay.textContent = calculatePrice();
    countAllItems(cartTotal.length);
  });
}
targetItemToRemove();
function targetItemToRemove() {
  basketContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-item")) {
      removeItem(e.target);
      countAllItems(cartTotal.length);
    }
  });
}

function removeItem(element) {
  const itemToRemove = element.closest(".new-item-added");
  if (itemToRemove) {
    const targetElement =
      element.parentElement.previousElementSibling.querySelector(
        ".price-received"
      ).textContent;
    const separatePrice = parseFloat(targetElement.replace("$", ""));
    const priceIndex = cartTotal.indexOf(separatePrice);
    if (priceIndex !== -1) {
      cartTotal.splice(priceIndex, 1);
    }
    itemToRemove.remove();
    totalToPay.textContent = calculatePrice();
  }
}

function calculatePrice() {
  const calculateTotal = cartTotal.reduce((value, sum) => value + sum, 0);
  return calculateTotal.toFixed(2);
}

function countAllItems(element) {
  const itemsIn = document.querySelector(".count-items");
  if (element === 0 && element === "") {
    itemsIn.style.opacity = "0";
  } else {
    itemsIn.style.opacity = "1";
    itemsIn.textContent = element;
  }
}
