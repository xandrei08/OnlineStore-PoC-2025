export function toggleFooter() {
  const dropdownBtn = document.querySelectorAll(".dropdown");
  dropdownBtn.forEach((item) => {
    item.addEventListener("click", (e) => {
      const parentDiv = e.target.closest(".dropdown-hidden");
      if (!parentDiv) return;
      const icon = item.querySelector(".fa-solid");
      icon.classList.toggle("rotate-180");
      const hiddenDiv = item.querySelector(".dropdown-content");
      hiddenDiv.classList.toggle("hidden");
      hiddenDiv.classList.toggle("animate-dropdown");
    });
  });
}
