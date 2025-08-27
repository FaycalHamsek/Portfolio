document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav a");
  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    });
  });

  const txt = "Allier technologie, rigueur... et passion pour l'océan 🌊";
  let i = 0;
  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("typewriter").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, 60);
    }
  }
  typeWriter();
});
