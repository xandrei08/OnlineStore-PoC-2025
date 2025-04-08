const subContainer = document.querySelector(".subscribe");

export function subscribe() {
  subContainer.innerHTML = `
  <div
        class="subscribe-content bg-white border-1 p-8 flex flex-col gap-3 shadow-gray-500/50 shadow-xl relative"
      >
        <h2 class="font-bold">Subscribe & Enjoy</h2>
        <h3 class="font-bold text-3xl">20% off</h3>
        <p class="font-bold">
          Join our email list and be first to know about exiciting sales.
        </p>
        <div class="flex flex-row gap-5">
          <input
            type="email"
            class="userEmail border-gray-500 border-1"
            placeholder="Enter Email Address"
          />
          <button class="btn-subscribe bg-amber-400 px-3 py-1 font-bold">
            Sign up now
          </button>
        </div>
        <p>Offer valid for new subscribes only.</p>
        <button class="close-subscribe-modal absolute top-2 right-2 text-white font-bold bg-red-600 text-2xl px-2 cursor-pointer rounded-2xl" aria-label="Close Modal">&times;</button>
      </div>
  `;
  closeModal();
}

function closeModal() {
  const closeModal = document.querySelector(".close-subscribe-modal");
  closeModal.addEventListener("click", () => {
    subContainer.innerHTML = "";
  });
}
