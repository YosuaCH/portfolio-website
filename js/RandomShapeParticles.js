function createSectionParticles() {
  const container = document.getElementById('particles-container');
  if (!container) return;

  const isMobile = window.innerWidth <= 768;
  const particleCount = isMobile ? 15 : 30;

  const particleTypes = [
    'particle particle-1',
    'particle particle-2',
    'particle particle-3',
    'particle particle-4',
    'particle shape-triangle',
    'particle shape-square'
  ];

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    const randomType = particleTypes[Math.floor(Math.random() * particleTypes.length)];
    particle.className = randomType;

    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 1 + 's';
    particle.style.opacity = Math.random() * 0.3 + 0.7;

    container.appendChild(particle);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  createSectionParticles();
});

window.addEventListener('scroll', function () {
  const particles = document.querySelectorAll('#particles-container .particle');
  const scrolled = window.pageYOffset;
  const section = document.getElementById('experience');
  const isMobile = window.innerWidth <= 768;

  if (section) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrolled >= sectionTop - window.innerHeight && scrolled <= sectionTop + sectionHeight) {
      particles.forEach((particle, index) => {
        if (index % 3 === 0) {
          const speed = isMobile ? 0.1 + (index % 3) * 0.02 : 0.4 + (index % 5) * 0.08;
          const yPos = (scrolled - sectionTop) * speed;
          particle.style.transform = `translateY(${yPos}px)`;
        }
      });
    }
  }
});
