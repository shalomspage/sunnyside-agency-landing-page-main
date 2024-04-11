let navCard = document.querySelector(".nav-card");

document.addEventListener("click", (e) => {
  let matchHamMenuBtn = e.target.matches(".ham-menu-btn");
  let navCardMatch = e.target.closest(".nav-card");

  if (matchHamMenuBtn) {
    navCard.classList.toggle("display");
  }

  if (!matchHamMenuBtn && navCardMatch == null) {
    navCard.classList.remove("display");
  }
});
