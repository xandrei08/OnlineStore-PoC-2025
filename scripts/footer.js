export function toggleFooter() {
  const dropdownBtn = document.querySelectorAll(".dropdown");
  dropdownBtn.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (!e.target.classList.contains("fa-solid")) return;
      e.target.parentElement.nextElementSibling.classList.toggle("hidden");
    });
  });
}
