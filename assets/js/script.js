window.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    const header = document.querySelector(".header");
    header.classList.add("animar");
    setTimeout(function () {
      document.querySelector(".menu").classList.add("mostrar");
      document.querySelector(".galeria").classList.add("mostrar");
      document.querySelector(".banner-home").classList.remove("oculto");
      document.querySelector(".banner-home").classList.add("mostrar");
      document.querySelector(".sobre").classList.remove("oculto");
      document.querySelector(".sobre").classList.add("mostrar");
      // Se tiver slideshow-container:
      const slideshow = document.querySelector(".slideshow-container");
      if (slideshow) {
        slideshow.classList.remove("oculto");
        slideshow.classList.add("mostrar");
      }
    }, 1400); // 1200ms da animação + 200ms do delay inicial
  }, 200); // Pequeno delay inicial
});

// Slideshow (caso use)
let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
function showSlides() {
  if (!slides.length) return;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Troca a cada 5 segundos
}
showSlides();

// Horário e status
function atualizarHorarioStatus() {
  const horarioSpan = document.getElementById("horario");
  const statusSpan = document.getElementById("status");
  const agora = new Date();
  const hora = agora.getHours();
  const minutos = agora.getMinutes().toString().padStart(2, "0");
  const dia = agora.toLocaleDateString();
  if (horarioSpan) horarioSpan.textContent = `🕒 ${hora}:${minutos} - ${dia}`;

  // Exemplo: aberto das 8h às 18h
  if (statusSpan) {
    if (hora >= 8 && hora < 18) {
      statusSpan.textContent = "🟢 Aberto";
      statusSpan.style.color = "green";
    } else {
      statusSpan.textContent = "🔴 Fechado";
      statusSpan.style.color = "red";
    }
  }
}
atualizarHorarioStatus();
setInterval(atualizarHorarioStatus, 60000); // Atualiza a cada minuto
