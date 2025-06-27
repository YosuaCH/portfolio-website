document.addEventListener('DOMContentLoaded', function () {
  const tiltContainer = document.querySelector('.tilt-container');
  const tiltElement = document.querySelector('.tilt-element');

  tiltContainer.addEventListener('mousemove', function (e) {
    const rect = tiltContainer.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateX = (mouseY / (rect.height / 2)) * -8;
    const rotateY = (mouseX / (rect.width / 2)) * 8;
    tiltElement.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  });

  tiltContainer.addEventListener('mouseleave', function () {
    tiltElement.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  });
});