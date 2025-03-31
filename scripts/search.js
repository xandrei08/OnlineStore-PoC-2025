export function searchItem() {
  const searchBar = document.querySelector(".search-bar");
  searchBar.addEventListener("input", (e) => {
    filterCards(e.target.value);
  });
}

function filterCards(userInput) {
  const getCardsTitle = Array.from(document.querySelectorAll(".card-title"));
  getCardsTitle.forEach((element) => {
    if (element.textContent.toLowerCase().includes(userInput.toLowerCase())) {
      element.parentElement.parentElement.style.display = "block";
    } else if (userInput === "") {
      element.parentElement.parentElement.style.display = "block";
    } else {
      element.parentElement.parentElement.style.display = "none";
    }
  });
}
