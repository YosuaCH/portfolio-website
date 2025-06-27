document.addEventListener("DOMContentLoaded", () => {
  const progressBar = document.getElementById("progress-bar");
  if (!progressBar) return;

  function animateProgressBar() {
    const isMobileView = window.innerWidth <= 768;

    // Reset animasi
    progressBar.style.transition = "none";
    progressBar.style.width = "0%";
    progressBar.style.transformOrigin = isMobileView ? "center" : "left";

    // Paksa browser render ulang
    void progressBar.offsetWidth;

    // Jalankan animasi
    progressBar.style.transition = "width 1.5s ease-out";
    progressBar.style.width = "100%";
  }

  // Observer unik
  const progressObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateProgressBar();
        }
      });
    },
    {
      threshold: 0.6, // elemen harus terlihat minimal 60%
    }
  );

  progressObserver.observe(progressBar);
});
