document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('nav.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
  }

  document.querySelectorAll('.carousel').forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    const prev = carousel.querySelector('.carousel-prev');
    const next = carousel.querySelector('.carousel-next');
    if (!track || !prev || !next) return;
    const scrollByAmount = () => track.clientWidth * 0.8;
    prev.addEventListener('click', () => track.scrollBy({ left: -scrollByAmount(), behavior: 'smooth' }));
    next.addEventListener('click', () => track.scrollBy({ left: scrollByAmount(), behavior: 'smooth' }));
  });

  const revealTargets = document.querySelectorAll('.card, .section-photo, .poster-card, .stat, .video-embed');
  if ('IntersectionObserver' in window && revealTargets.length) {
    revealTargets.forEach(el => el.classList.add('reveal'));
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealTargets.forEach(el => io.observe(el));

    // Red de seguridad: nada debe quedarse invisible para siempre
    // (saltos de teclado, lectores de pantalla, navegadores atípicos...).
    const revealAll = () => revealTargets.forEach(el => el.classList.add('is-visible'));
    setTimeout(revealAll, 2500);
    window.addEventListener('pageshow', revealAll);
  }
});
