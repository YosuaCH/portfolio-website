window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("bg-white", "shadow-md");
  } else {
    navbar.classList.remove("shadow-md");
  }
});