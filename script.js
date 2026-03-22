/* ====================================
   LOKESH K — CINEMATIC PORTFOLIO
   script.js
   ==================================== */

(function () {
  'use strict';

  /* ════════════════════════════════════
     CINEMATIC INTRO ANIMATION
  ════════════════════════════════════ */
  function runIntro() {
    const screen   = document.getElementById('intro-screen');
    const veil     = screen  && screen.querySelector('.intro-veil');
    const introBg  = document.getElementById('intro-bg');
    const name     = screen  && screen.querySelector('.intro-name');
    const line     = screen  && screen.querySelector('.intro-line');
    const title    = screen  && screen.querySelector('.intro-title');

    if (!screen) { unlockScroll(); return; }

    // Phase 1 (300ms) — lift the dark veil so posters gently appear
    setTimeout(() => {
      if (veil)    veil.classList.add('gone');
      if (introBg) introBg.classList.add('reveal-bg');
    }, 300);

    // Phase 2 (900ms) — name fades up
    setTimeout(() => {
      if (name) name.classList.add('show');
    }, 900);

    // Phase 3 (1200ms) — divider line grows
    setTimeout(() => {
      if (line) line.classList.add('show');
    }, 1200);

    // Phase 4 (1400ms) — subtitle fades up
    setTimeout(() => {
      if (title) title.classList.add('show');
    }, 1400);

    // Phase 5 (3200ms) — fade entire intro out
    setTimeout(() => {
      screen.classList.add('exit');
    }, 3200);

    // Phase 6 (4400ms) — remove from DOM, unlock scroll
    setTimeout(() => {
      screen.remove();
      unlockScroll();
    }, 4400);
  }

  function unlockScroll() {
    document.body.classList.remove('is-loading');
  }

  runIntro();

  /* ════════════════════════════════════
     SCROLL PROGRESS → CSS VAR
  ════════════════════════════════════ */
  const root = document.documentElement;

  function updateScroll() {
    const hero  = document.getElementById('hero');
    const heroH = hero ? hero.offsetHeight : window.innerHeight;
    const scroll = Math.min(window.scrollY / heroH, 1);
    root.style.setProperty('--scroll', scroll.toFixed(4));

    /* Navbar visibility */
    const nav = document.getElementById('navbar');
    if (nav) {
      if (window.scrollY > heroH * 0.6) {
        nav.classList.add('visible');
      } else {
        nav.classList.remove('visible');
      }
    }
  }

  window.addEventListener('scroll', updateScroll, { passive: true });
  updateScroll();

  /* ════════════════════════════════════
     INTERSECTION OBSERVER – REVEAL
  ════════════════════════════════════ */
  function initReveal() {
    const revealEls = document.querySelectorAll('.reveal');
    const observer  = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => observer.observe(el));
  }
  initReveal();

  /* ════════════════════════════════════
     CATEGORY CARD → SMOOTH SCROLL
  ════════════════════════════════════ */
  document.querySelectorAll('[data-target]').forEach(card => {
    card.addEventListener('click', () => {
      const target = document.getElementById(card.dataset.target);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
    /* Keyboard accessibility */
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });

  /* ════════════════════════════════════
     LIGHTBOX
  ════════════════════════════════════ */
  const lightbox = document.getElementById('lightbox');
  const lbImg    = document.getElementById('lb-img');
  const lbClose  = document.getElementById('lb-close');
  const lbPrev   = document.getElementById('lb-prev');
  const lbNext   = document.getElementById('lb-next');

  let currentGallery = [];
  let currentIndex   = 0;

  function openLightbox(src, gallery, index) {
    lbImg.src         = src;
    currentGallery    = gallery;
    currentIndex      = index;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(() => { lbImg.src = ''; }, 350);
  }

  function showSlide(index) {
    if (!currentGallery.length) return;
    currentIndex = (index + currentGallery.length) % currentGallery.length;
    lbImg.style.opacity = '0';
    setTimeout(() => {
      lbImg.src = currentGallery[currentIndex];
      lbImg.style.opacity = '1';
    }, 180);
  }

  if (lbClose) lbClose.addEventListener('click', closeLightbox);
  if (lbPrev)  lbPrev.addEventListener('click',  () => showSlide(currentIndex - 1));
  if (lbNext)  lbNext.addEventListener('click',  () => showSlide(currentIndex + 1));
  if (lightbox) lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  showSlide(currentIndex - 1);
    if (e.key === 'ArrowRight') showSlide(currentIndex + 1);
  });

  lbImg.style.transition = 'opacity 0.18s ease';

  /* Wire up portfolio items */
  function initGalleries() {
    const sections = document.querySelectorAll('.portfolio-section');
    sections.forEach(section => {
      const items = section.querySelectorAll('.port-item');
      const srcs  = Array.from(items).map(el => el.querySelector('img').src);
      items.forEach((item, idx) => {
        item.addEventListener('click', () => openLightbox(srcs[idx], srcs, idx));
      });
    });
  }
  initGalleries();

  /* ════════════════════════════════════
     MOBILE HAMBURGER
  ════════════════════════════════════ */
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks  = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  /* ════════════════════════════════════
     SMOOTH NUMBER COUNTER
  ════════════════════════════════════ */
  function animateCount(el) {
    const target = parseInt(el.dataset.count, 10);
    const dur    = 1800;
    const step   = 16;
    const total  = dur / step;
    let count    = 0;
    const ticker = setInterval(() => {
      count++;
      const val = Math.round(target * (count / total));
      el.textContent = val + (el.dataset.suffix || '');
      if (count >= total) {
        el.textContent = target + (el.dataset.suffix || '');
        clearInterval(ticker);
      }
    }, step);
  }

  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.count-num').forEach(animateCount);
        counterObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.4 });

  document.querySelectorAll('.about-stats').forEach(el => counterObs.observe(el));

})();
