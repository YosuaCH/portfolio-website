document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("overlay");
  const navbar = document.getElementById("navbar");
  const mobileMenuToggleBtn = document.createElement("button");
  mobileMenuToggleBtn.className = "absolute top-6 left-6 z-10 hamburger-btn";
  mobileMenuToggleBtn.innerHTML = `
    <div class="hamburger-lines">
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
    </div>
  `;
  mobileMenu.appendChild(mobileMenuToggleBtn);

  function closeMobileMenu() {
    mobileMenu.classList.remove("translate-x-0");
    mobileMenu.classList.add("-translate-x-full");
    overlay.classList.add("hidden");
    navbar.classList.remove("hidden");
    document.body.classList.remove("overflow-hidden");

    menuToggle.classList.remove("active");
    mobileMenuToggleBtn.classList.remove("active");
  }

  function openMobileMenu() {
    mobileMenu.classList.remove("-translate-x-full");
    mobileMenu.classList.add("translate-x-0");
    overlay.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");

    menuToggle.classList.add("active");
    mobileMenuToggleBtn.classList.add("active");
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.contains("translate-x-0");
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  mobileMenuToggleBtn.addEventListener("click", closeMobileMenu);

  const menuLinks = mobileMenu.querySelectorAll("a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  overlay.addEventListener("click", closeMobileMenu);
});
