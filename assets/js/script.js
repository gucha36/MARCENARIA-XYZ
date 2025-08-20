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

function atualizarHorarioStatus() {
  const horarioSpan = document.getElementById("horario");
  const statusSpan = document.getElementById("status");
  const agora = new Date();
  const hora = agora.getHours();
  const minutos = agora.getMinutes().toString().padStart(2, "0");
  const dia = agora.toLocaleDateString();
  horarioSpan.textContent = `🕒 ${hora}:${minutos} - ${dia}`;

  // Exemplo: aberto das 8h às 18h
  if (hora >= 8 && hora < 18) {
    statusSpan.textContent = "🟢 Aberto";
    statusSpan.style.color = "green";
  } else {
    statusSpan.textContent = "🔴 Fechado";
    statusSpan.style.color = "red";
  }
}
atualizarHorarioStatus();
setInterval(atualizarHorarioStatus, 60000); // Atualiza a cada minuto
