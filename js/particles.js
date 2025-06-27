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

  // Deteksi mobile device
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // Konfigurasi partikel sesuai device
  const particlesValue = isMobile ? 40 : 60;
  const particlesLimit = isMobile ? 70 : 120;
  const pushQuantity = isMobile ? 3 : 4;
  const fpsLimit = 200;

  tsParticles
    .load("particles-js", {
      background: { color: { value: "transparent" } },
      fpsLimit: fpsLimit,
      interactivity: {
        detectsOn: "window",
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
          resize: true,
        },
        modes: {
          push: {
            quantity: pushQuantity,
            max: particlesLimit,
          },
          repulse: { distance: 150, duration: 0.4 },
        },
      },
      particles: {
        number: {
          value: particlesValue,
          density: { enable: true, area: 800 },
          limit: particlesLimit,
        },
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
        opacity: { value: 0.7 },
        shape: { type: "circle" },
        size: { value: { min: 3, max: 8 } },
      },
      detectRetina: true,
    })
    .then(() => {
      const hero = document.getElementById("hero");
      const particlesInstance = tsParticles.domItem(0);

      document.addEventListener("click", (e) => {
        const inHero = hero.contains(e.target);
        particlesInstance.interactivity.events.onClick.enable = inHero;
      });

      document.addEventListener("mousemove", (e) => {
        const inHero = hero.contains(e.target);
        particlesInstance.interactivity.events.onHover.enable = inHero;
      });
    });
}
