document.addEventListener('DOMContentLoaded', function() {
  const timeouts = new WeakMap();

  const callback = (entries) => {
    entries.forEach(entry => {
      if (timeouts.has(entry.target)) {
        clearTimeout(timeouts.get(entry.target));
      }

      const timeout = setTimeout(() => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      }, 50);

      timeouts.set(entry.target, timeout);
    });
  };

  const observer = new IntersectionObserver(callback, {
    threshold: 0.25,
    rootMargin: '-80px 0px -80px 0px'
  });

  const elementsToAnimate = document.querySelectorAll('.project-card');

  elementsToAnimate.forEach((element, index) => {
    element.style.setProperty('--delay', `${index * 10}ms`);
    observer.observe(element);
  });
});
