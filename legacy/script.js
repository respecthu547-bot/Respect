// ===== Sticky header on scroll =====
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

// ===== Mobile nav toggle =====
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
navToggle.addEventListener('click', () => navMenu.classList.toggle('open'));
navMenu.querySelectorAll('.nav-link').forEach((link) =>
  link.addEventListener('click', () => navMenu.classList.remove('open'))
);

// ===== Scroll reveal animations =====
const revealTargets = document.querySelectorAll(
  '.feature-card, .product-card, .step, .testi-card, .about-text, .about-img, .contact-form, .contact-info'
);
revealTargets.forEach((el) => el.classList.add('reveal'));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealTargets.forEach((el) => observer.observe(el));

// ===== Contact form handling =====
const form = document.getElementById('contact-form');
const note = document.getElementById('form-note');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  note.hidden = false;
  form.reset();
  setTimeout(() => (note.hidden = true), 5000);
});

// ===== Current year in footer =====
document.getElementById('year').textContent = new Date().getFullYear();
