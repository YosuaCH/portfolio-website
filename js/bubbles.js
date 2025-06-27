document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const isDark = html.classList.contains("dark");
  generateBubbles(isDark);
});

window.addEventListener("themeChanged", (e) => {
  const isDark = e.detail === "dark";
  regenerateBubbles(isDark);
});

function regenerateBubbles(isDark) {
  const container = document.querySelector(".bubbles");
  if (!container) return;

  // Bersihkan bubble lama
  container.innerHTML = "";

  // Buat ulang
  generateBubbles(isDark);
}

function generateBubbles(isDark) {
  const bubblesContainer = document.querySelector(".bubbles");
  if (!bubblesContainer) return;

  const width = window.innerWidth;
  const isSmallDevice = width <= 1024;

  const bubbleCount = isSmallDevice ? 20 : 64;
  const sizeRange = isSmallDevice ? [1.5, 3] : [3, 6];
  const distanceRange = isSmallDevice ? [4, 6] : [6, 10];
  const durationRange = isSmallDevice ? [1.2, 2] : [2, 4];

  for (let i = 0; i < bubbleCount; i++) {
    const bubble = document.createElement("div");
    bubble.className = "bubble";

    const size = sizeRange[0] + Math.random() * (sizeRange[1] - sizeRange[0]);
    const distance =
      distanceRange[0] + Math.random() * (distanceRange[1] - distanceRange[0]);
    const duration =
      durationRange[0] + Math.random() * (durationRange[1] - durationRange[0]);
    const effectiveWidth = 90;
    const left = isSmallDevice
      ? (effectiveWidth / bubbleCount) * i +
        5 +
        effectiveWidth / bubbleCount / 2
      : Math.random() * 100;

    bubble.style.setProperty("--size", `${size}rem`);
    bubble.style.setProperty("--distance", `${distance}rem`);
    bubble.style.setProperty("--position", `${left}%`);
    bubble.style.setProperty("--time", `${duration}s`);
    bubble.style.setProperty("--delay", `${-1 * duration}s`);
    bubble.style.background = isDark ? "#b38f00" : "#1e40af";

    bubblesContainer.appendChild(bubble);
  }
}
