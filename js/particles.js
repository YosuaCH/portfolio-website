document.addEventListener("DOMContentLoaded", function () {
  const html = document.documentElement;
  const isDark = html.classList.contains("dark");
  loadParticlesByTheme(isDark);
});

window.addEventListener("themeChanged", (e) => {
  const isDark = e.detail === "dark";
  loadParticlesByTheme(isDark);
});

function loadParticlesByTheme(isDark) {
  if (typeof tsParticles === "undefined") return;

  tsParticles.load("particles-js", {
    background: { color: { value: "transparent" } },
    fpsLimit: 200,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
        resize: true,
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 150, duration: 0.4 },
      },
    },
    particles: {
      color: { value: isDark ? "#FFC107" : "#1E40AF" },
      links: {
        color: isDark ? "#FFD54F" : "#023047",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      collisions: { enable: true },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        speed: 2,
      },
      number: { density: { enable: true, area: 800 }, value: 60 },
      opacity: { value: 0.7 },
      shape: { type: "circle" },
      size: { value: { min: 3, max: 8 } },
    },
    detectRetina: true,
  });
}
