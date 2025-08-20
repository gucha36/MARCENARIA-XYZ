window.addEventListener("DOMContentLoaded", function () {
  // Inicia animação da header (logo)
  setTimeout(function () {
    const header = document.querySelector(".header");
    header.classList.add("animar");
    // Após animação, mostra o menu e galeria
    setTimeout(function () {
      document.querySelector(".menu").classList.add("mostrar");
      document.querySelector(".galeria").classList.add("mostrar");

      document.querySelector(".slideshow-container").classList.remove("oculto");
      document.querySelector(".slideshow-container").classList.add("mostrar");
    }, 1200); // Tempo igual ao da animação
  }, 200); // Pequeno delay inicial
});
let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Troca a cada 3 segundos
}
showSlides();
