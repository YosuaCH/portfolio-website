document.addEventListener("DOMContentLoaded", () => {
  const progressBar = document.getElementById("progress-bar");
  if (!progressBar) return;

  function animateProgressBar() {
    const isMobileView = window.innerWidth <= 768;

    progressBar.style.transition = "none";
    progressBar.style.width = "0%";
    progressBar.style.transformOrigin = isMobileView ? "center" : "left";

    void progressBar.offsetWidth;

    progressBar.style.transition = "width 1.5s ease-out";
    progressBar.style.width = "100%";
  }

  const progressObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateProgressBar();
        }
      });
    },
    {
      threshold: 0.6,
    }
  );

  progressObserver.observe(progressBar);
});
