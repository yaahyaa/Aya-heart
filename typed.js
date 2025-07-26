// typed.js: Handles typing animation for the dedication sentence
document.addEventListener("DOMContentLoaded", function() {
    const text = "this heart is for you :) \n        Ayaaaaaa  ";
    const target = document.getElementById("typed-text");
    let i = 0;
    function typeWriter() {
      if (i <= text.length) {
        target.textContent = text.slice(0, i);
        i++;
        setTimeout(typeWriter, 63); // typing speed in ms
      }
    }
    typeWriter();
  });
