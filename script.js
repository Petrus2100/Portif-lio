const swiper = new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: 30,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});

const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('navbar');
toggle.addEventListener('click', () => {
  toggle.classList.toggle('open');
  nav.classList.toggle('open');
});

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function(e) {
        // Se clicar no botão de fechar (Voltar)
        if (e.target.classList.contains('close-opt')) {
            this.classList.remove('active');
            return;
        }

        // Se clicar nos botões de link, deixa o navegador seguir o link
        if (e.target.classList.contains('opt-btn')) {
            return;
        }

        // Fecha outros cards abertos antes de abrir o atual (opcional)
        document.querySelectorAll('.project-card').forEach(c => {
            if (c !== this) c.classList.remove('active');
        });

        // Abre as opções do card clicado
        this.classList.toggle('active');
    });
});