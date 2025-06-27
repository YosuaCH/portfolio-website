document.addEventListener("DOMContentLoaded", function () {
  new Typed("#typed-text", {
    strings: [
      "<span class='text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-500 dark:from-red-500 dark:to-yellow-500'>Hi, I'm Yosua</span> <span>&#128075;</span>",
      "<span class='text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-500 dark:from-red-500 dark:to-yellow-500'>Midnight Developer</span> <span>&#128128;</span>",
      "<span class='text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-500 dark:from-red-500 dark:to-yellow-500'>Dream, Code, Deploy </span> <span>&#128640;</span>",
    ],
    typeSpeed: 40,
    backSpeed: 30,
    loop: true,
  });

  new Typed("#projects-typed", {
    strings: [
      "<span class='text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-500 dark:from-red-500 dark:to-yellow-500'>What I've Done</span>",
      "<span class='text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-500 dark:from-red-500 dark:to-yellow-500'>Code, Build, Repeat.</span> <span>&#128293;</span>",
    ],
    typeSpeed: 40,
    backSpeed: 30,
    loop: true,
  });

  new Typed("#imagination-text", {
    strings: [
      "<span>Your story is still being written, build something today that your future self will thank you for.</span>",
    ],
    typeSpeed: 10,
    showCursor: true,
    cursorChar: "|",
    loop: false,
  });
});
