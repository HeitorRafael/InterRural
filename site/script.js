// Menu mobile
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.classList.toggle('open', isOpen);
  menuToggle.setAttribute('aria-expanded', isOpen);
});

// Fecha menu ao clicar em qualquer link
document.querySelectorAll('#nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', false);
  });
});

// Sombra extra no header ao rolar
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 8) {
    header.style.boxShadow = '0 4px 24px rgba(0,0,0,0.32)';
  } else {
    header.style.boxShadow = '';
  }
}, { passive: true });

// Animação de entrada para os cards ao entrar na viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.card, .equipe-card, .programa-selo').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(22px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
