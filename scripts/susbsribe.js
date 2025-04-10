const subContainer = document.querySelector(".subscribe");

export function subscribe() {
  subContainer.innerHTML = `
  <div
        class="subscribe-content w-fit xs:p-2 xs:mx-5 bg-white border-1 p-8 flex flex-col gap-3 shadow-gray-500/50 shadow-xl relative"
      >
        <h2 class="font-bold">Subscribe & Enjoy</h2>
        <h3 class="font-bold text-3xl">20% off</h3>
        <p class="font-bold">
          Join our email list and be first to know about exiciting sales.
        </p>
        <div class="flex flex-row gap-5">
          <input
            type="email"
            restricted
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
  closeSubscribeModal();
  getSubEmailData();
}

function closeSubscribeModal() {
  const closeModal = document.querySelector(".close-subscribe-modal");
  closeModal.addEventListener("click", () => {
    subContainer.innerHTML = "";
  });
}

function getSubEmailData() {
  const getUserEmail = document.querySelector(".userEmail");
  const signUpBtn = document.querySelector(".btn-subscribe");
  signUpBtn.addEventListener("click", () => {
    const email = getUserEmail.value.trim();
    if (email === "") {
      alert("Please type your email");
      return;
    }
    const emailList = JSON.parse(localStorage.getItem("emails")) || [];
    if (!emailList.includes(email)) {
      emailList.push(email);
      localStorage.setItem("emails", JSON.stringify(emailList));
      subCompleted();
    } else {
      alert("This email is already subsciibed");
    }
  });
}

function subCompleted() {
  subContainer.innerHTML = `<div
        class="subscribe-content bg-white border-1 p-8 flex flex-col gap-4 shadow-gray-500/50 shadow-xl relative"
      >
       <h2 class="w-full font-bold p-4"> Thank you for your subscription!</h2>
       <h3 class="w-full font-bold p-4"> Your voucher of 20% discount: SAVE20</h3>
      </div>`;
  setTimeout(() => {
    subContainer.innerHTML = "";
  }, 3000);
}
