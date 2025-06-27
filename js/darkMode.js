document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const toggleCircle = darkModeToggle?.querySelector(".toggle-circle");
  const sunIcon = darkModeToggle?.querySelector(".sun-icon");
  const moonIcon = darkModeToggle?.querySelector(".moon-icon");
  const html = document.documentElement;

  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    enableDarkMode();
  } else {
    enableLightMode();
  }

  darkModeToggle?.addEventListener("click", () => {
    if (html.classList.contains("dark")) {
      enableLightMode();
    } else {
      enableDarkMode();
    }
  });

  function enableDarkMode() {
    html.classList.add("dark");
    if (toggleCircle) toggleCircle.style.transform = "translateX(28px)";
    if (sunIcon) sunIcon.style.opacity = "0";
    if (moonIcon) moonIcon.style.opacity = "1";
    localStorage.setItem("theme", "dark");
    window.dispatchEvent(new CustomEvent("themeChanged", { detail: "dark" }));
  }

  function enableLightMode() {
    html.classList.remove("dark");
    if (toggleCircle) toggleCircle.style.transform = "translateX(0px)";
    if (sunIcon) sunIcon.style.opacity = "1";
    if (moonIcon) moonIcon.style.opacity = "0";
    localStorage.setItem("theme", "light");
    window.dispatchEvent(new CustomEvent("themeChanged", { detail: "light" }));
  }

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (!localStorage.getItem("theme")) {
        if (e.matches) {
          enableDarkMode();
        } else {
          enableLightMode();
        }
      }
    });
});
