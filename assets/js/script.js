// Fechar modal ao clicar fora da imagem
document
  .getElementById("modal-galeria")
  .addEventListener("click", function (e) {
    if (e.target === this) {
      fecharModalGaleria();
    }
  });
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
      document.querySelector(".contato").classList.remove("oculto");
      document.querySelector(".contato").classList.add("mostrar");
    }, 1400);
  }, 200);

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
    setTimeout(showSlides, 5000);
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
  setInterval(atualizarHorarioStatus, 60000);

  // MODAL/LIGHTBOX GALERIA - Eventos
  document.querySelectorAll(".galeria figure").forEach(function (fig) {
    fig.addEventListener("click", function () {
      const titulo = fig.querySelector("h4").textContent.trim();
      abrirModalGaleria(titulo, 0);
    });
  });
  document.getElementById("modal-fechar").onclick = fecharModalGaleria;
  document.getElementById("modal-proximo").onclick = function () {
    avancarModal();
  };
  document.getElementById("modal-anterior").onclick = function () {
    voltarModal();
  };
  document
    .getElementById("modal-galeria")
    .addEventListener("mouseenter", pararRotacaoModal);
  document
    .getElementById("modal-galeria")
    .addEventListener("mouseleave", iniciarRotacaoModal);
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

// =========================
// MODAL/LIGHTBOX GALERIA
// =========================

// Listas de imagens por grupo
const gruposGaleria = {
  "Cozinha Personalizada": [
    {
      src: "assets/img/cozinhas/cozinha.png",
      legenda: "Cozinha Personalizada 1",
    },
    {
      src: "assets/img/cozinhas/cozinha2.jpeg",
      legenda: "Cozinha Personalizada 2",
    },
    {
      src: "assets/img/cozinhas/cozinha3.jpeg",
      legenda: "Cozinha Personalizada 3",
    },
    {
      src: "assets/img/cozinhas/cozinha4.jpeg",
      legenda: "Cozinha Personalizada 4",
    },
  ],
  "Banheiro Elegante": [
    {
      src: "assets/img/banheiros/banheiro (1).jpeg",
      legenda: "Banheiro Elegante 1",
    },
    {
      src: "assets/img/banheiros/banheiro (2).jpeg",
      legenda: "Banheiro Elegante 2",
    },
    {
      src: "assets/img/banheiros/banheiro (3).jpeg",
      legenda: "Banheiro Elegante 3",
    },
    {
      src: "assets/img/banheiros/banheiro (4).jpeg",
      legenda: "Banheiro Elegante 4",
    },
  ],
  "Sala Aconchegante": [
    { src: "assets/img/salas/sala.jpeg", legenda: "Sala Aconchegante 1" },
    { src: "assets/img/salas/sala (1).jpeg", legenda: "Sala Aconchegante 2" },
    { src: "assets/img/salas/sala (2).jpeg", legenda: "Sala Aconchegante 3" },
    { src: "assets/img/salas/sala (3).jpeg", legenda: "Sala Aconchegante 4" },
    { src: "assets/img/salas/sala (4).jpeg", legenda: "Sala Aconchegante 4" },
  ],
  "Outros Trabalhos": [
    { src: "assets/img/outros/adegas.png", legenda: "Adegas" },
    { src: "assets/img/outros/outros (1).jpeg", legenda: "Adegas 2" },
    { src: "assets/img/outros/outros (2).jpeg", legenda: "Adegas 3" },
    { src: "assets/img/outros/outros (3).jpeg", legenda: "Adegas 4" },
    { src: "assets/img/outros/outros (4).jpeg", legenda: "Adegas 4" },
    { src: "assets/img/outros/outros (5).jpeg", legenda: "Adegas 4" },
    { src: "assets/img/outros/outros (6).jpeg", legenda: "Adegas 4" },
  ],
};

let modalIndex = 0;
let modalGrupo = null;
let modalTimer = null;

function abrirModalGaleria(grupo, index) {
  modalGrupo = gruposGaleria[grupo];
  if (!modalGrupo) return;
  modalIndex = index || 0;
  atualizarModal();
  document.getElementById("modal-galeria").style.display = "flex";
  pararRotacaoModal(); // Garante que não há timer antigo
  iniciarRotacaoModal(); // Inicia rotação imediatamente
  setTimeout(() => {
    iniciarRotacaoModal();
  }, 100);
}

function fecharModalGaleria() {
  document.getElementById("modal-galeria").style.display = "none";
  pararRotacaoModal();
}

function atualizarModal() {
  if (!modalGrupo) return;
  const img = document.getElementById("modal-img");
  const legenda = document.getElementById("modal-legenda");
  img.src = modalGrupo[modalIndex].src;
  legenda.textContent = modalGrupo[modalIndex].legenda;
}

function avancarModal() {
  if (!modalGrupo) return;
  modalIndex = (modalIndex + 1) % modalGrupo.length;
  atualizarModal();
}

function voltarModal() {
  if (!modalGrupo) return;
  modalIndex = (modalIndex - 1 + modalGrupo.length) % modalGrupo.length;
  atualizarModal();
}

function iniciarRotacaoModal() {
  pararRotacaoModal();
  modalTimer = setInterval(avancarModal, 3500);
}
function pararRotacaoModal() {
  if (modalTimer) clearInterval(modalTimer);
  modalTimer = null;
}

// Eventos do modal - agora dentro do primeiro DOMContentLoaded
