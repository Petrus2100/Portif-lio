const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');
const projectCards = document.querySelectorAll('.project-card');

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

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('open');
    navbar.classList.toggle('open');
});

projectCards.forEach(card => {
    card.addEventListener('click', function(e) {
        if (e.target.classList.contains('close-opt')) {
            this.classList.remove('active');
            return;
        }

        if (e.target.classList.contains('opt-btn')) {
            return;
        }

        projectCards.forEach(c => {
            if (c !== this) c.classList.remove('active');
        });

        this.classList.toggle('active');
    });
});

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('open');
        menuToggle.classList.remove('open');
    });
});