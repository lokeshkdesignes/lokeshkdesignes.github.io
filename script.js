document.addEventListener('DOMContentLoaded', () => {

  /* ═══ CUSTOM CURSOR (pen tool only, no dot) ═══ */
  const cursorMain = document.getElementById('cursor-main');
  const scrollIndicator = document.getElementById('scroll-indicator');

  document.addEventListener('mousemove', e => {
    cursorMain.style.left = e.clientX + 'px';
    cursorMain.style.top = e.clientY + 'px';
  });

  // Detect light sections for cursor color swap
  const lightSections = document.querySelectorAll('.section-light');
  let mouseY = 0;
  function updateCursorColor(e) {
    mouseY = e.clientY;
    let inLight = false;
    lightSections.forEach(sec => {
      const r = sec.getBoundingClientRect();
      if (mouseY >= r.top && mouseY <= r.bottom) inLight = true;
    });
    document.body.classList.toggle('light-section', inLight);
  }
  document.addEventListener('mousemove', updateCursorColor);

  /* ═══ INTRO ANIMATION (JS character-by-character typing) ═══ */
  const overlay = document.getElementById('intro-overlay');
  const introTyped = document.getElementById('intro-typed');
  const introCaret = document.getElementById('intro-caret');
  const introName = document.getElementById('intro-name');
  const introRole = document.getElementById('intro-role');
  const introSig = document.getElementById('intro-sig');
  const introCursorBlink = document.getElementById('intro-cursor-blink');
  const navbar = document.getElementById('navbar');

  let introEnded = false;
  function endIntro() {
    if (introEnded) return;
    introEnded = true;
    if (typingInterval) clearInterval(typingInterval);

    const hero = document.getElementById('hero');

    // Start hero animation BEFORE intro disappears
    hero.style.opacity = '1';
    hero.style.transform = 'scale(1)';

    setTimeout(() => {
      document.querySelector('.hero-content').classList.add('show');
    }, 300);

    // Fade out intro smoothly
    overlay.style.opacity = '0';
    overlay.style.filter = 'blur(6px)';

    // Remove overlay AFTER animation completes
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 800);

    navbar.classList.add('visible');
    document.body.style.overflow = '';
    scrollIndicator.classList.add('visible');
  }

  document.body.style.overflow = 'hidden';

  const fullName = 'LOKESH K';
  let charIndex = 0;
  let typingInterval = null;

  // Step 1: Show blinking cursor for 600ms, then start typing
  setTimeout(() => {
    introCursorBlink.style.display = 'none';
    introName.classList.add('show');

    // Step 2: Type one character every 100ms
    typingInterval = setInterval(() => {
      if (charIndex < fullName.length) {
        introTyped.textContent += fullName[charIndex];
        charIndex++;
      } else {
        clearInterval(typingInterval);
        typingInterval = null;

        // Step 3: After 400ms pause, fade in role
        setTimeout(() => {
          introRole.classList.add('show');

          // Step 4: After 800ms more, fade in signature
          setTimeout(() => {
            introSig.classList.add('show');
            introCaret.classList.add('hide');

            // Step 5: After 1200ms more, end intro
            setTimeout(endIntro, 1200);
          }, 800);
        }, 400);
      }
    }, 100);
  }, 600);

  document.getElementById('skip-intro').addEventListener('click', endIntro);
  overlay.addEventListener('click', e => {
    if (e.target === overlay) endIntro();
  });

  /* ═══ SCROLL PROGRESS ═══ */
  const scrollBar = document.getElementById('scroll-progress');
  window.addEventListener('scroll', () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    const pct = h > 0 ? (window.scrollY / h) * 100 : 0;
    scrollBar.style.height = pct + '%';
  });

  /* ═══ SCROLL REVEAL ═══ */
  const reveals = document.querySelectorAll('.reveal');
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
  }, { threshold: 0.12 });
  reveals.forEach(el => revealObs.observe(el));

  /* ═══ NAV ACTIVE HIGHLIGHT ═══ */
  const sections = document.querySelectorAll('.section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  const navObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => a.classList.remove('active'));
        const id = entry.target.id;
        const link = document.querySelector(`.nav-links a[href="#${id}"]`);
        if (link) link.classList.add('active');
      }
    });
  }, { threshold: 0.3 });
  sections.forEach(s => navObs.observe(s));

  /* ═══ HAMBURGER ═══ */
  const hamburger = document.querySelector('.hamburger');
  const navLinksUl = document.querySelector('.nav-links');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinksUl.classList.toggle('open');
  });
  navLinksUl.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinksUl.classList.remove('open');
    });
  });

  /* ═══ LAYER GROUPS (Accordion) ═══ */
  document.querySelectorAll('.layer-group-header').forEach(header => {
    header.addEventListener('click', () => {
      header.parentElement.classList.toggle('open');
    });
  });

  // Open first group by default
  const firstGroup = document.querySelector('.layer-group');
  if (firstGroup) firstGroup.classList.add('open');

  /* ═══ LIGHTBOX ═══ */
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lb-img');
  let lbImages = [];
  let lbIndex = 0;

  // Collect all portfolio images
  document.querySelectorAll('.layer-card img').forEach(img => {
    lbImages.push(img.src);
    img.addEventListener('click', () => {
      lbIndex = lbImages.indexOf(img.src);
      lbImg.src = img.src;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  document.querySelector('.lb-close').addEventListener('click', closeLb);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLb(); });

  function closeLb() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.querySelector('.lb-prev').addEventListener('click', e => {
    e.stopPropagation();
    lbIndex = (lbIndex - 1 + lbImages.length) % lbImages.length;
    lbImg.src = lbImages[lbIndex];
  });

  document.querySelector('.lb-next').addEventListener('click', e => {
    e.stopPropagation();
    lbIndex = (lbIndex + 1) % lbImages.length;
    lbImg.src = lbImages[lbIndex];
  });

  // Keyboard nav
  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLb();
    if (e.key === 'ArrowLeft') { lbIndex = (lbIndex - 1 + lbImages.length) % lbImages.length; lbImg.src = lbImages[lbIndex]; }
    if (e.key === 'ArrowRight') { lbIndex = (lbIndex + 1) % lbImages.length; lbImg.src = lbImages[lbIndex]; }
  });

  /* ═══ STATS COUNTER ANIMATION ═══ */
  const statsRow = document.querySelector('.stats-row');
  if (statsRow) {
    const statsObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          statsObs.unobserve(entry.target);
          animateStats();
        }
      });
    }, { threshold: 0.5 });
    statsObs.observe(statsRow);
  }

  function animateStats() {
    const statEls = document.querySelectorAll('.stat-number');
    statEls.forEach(el => {
      const target = parseInt(el.getAttribute('data-target'));
      const duration = target <= 10 ? 1200 : target <= 50 ? 1500 : 1800;
      const startTime = performance.now();

      function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

      function update(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOut(progress);
        const current = Math.round(easedProgress * target);
        el.textContent = current + (progress >= 1 ? '+' : '');
        if (progress < 1) {
          requestAnimationFrame(update);
        }
      }
      requestAnimationFrame(update);
    });
  }

  /* ═══ CONTACT FORM (EmailJS) ═══ */
  // Initialize EmailJS — replace YOUR_PUBLIC_KEY with your EmailJS public key
  // emailjs.init("YOUR_PUBLIC_KEY");

  const form = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  form.addEventListener('submit', e => {
    e.preventDefault();
    formStatus.textContent = 'Sending...';

    // ── EmailJS Integration ──
    // Replace these placeholders with your actual EmailJS credentials:
    //   SERVICE_ID  → your EmailJS service ID
    //   TEMPLATE_ID → your EmailJS template ID
    //
    // emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', form)
    //   .then(() => {
    //     formStatus.textContent = 'Message sent successfully!';
    //     form.reset();
    //   }, (err) => {
    //     formStatus.textContent = 'Failed to send. Please try again.';
    //     console.error(err);
    //   });

    // Fallback: Formspree (replace YOUR_FORM_ID)
    fetch('https://formspree.io/f/xreopyeb', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(form)
    })
      .then(r => {
        if (r.ok) { formStatus.textContent = 'Message sent successfully!'; form.reset(); }
        else { formStatus.textContent = 'Failed to send. Please try again.'; }
      })
      .catch(() => { formStatus.textContent = 'Network error. Please try again.'; });
  });

  scrollIndicator.addEventListener('click', () => {
    document.getElementById('about')
      .scrollIntoView({ behavior: 'smooth' });
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      scrollIndicator.classList.add('hidden');
    } else {
      scrollIndicator.classList.remove('hidden');
    }
  }, { passive: true });

  /* ═══ CLIENTS CENTRE-FOCUS DEPTH EFFECT ═══ */
  (function initClientsFocus() {
    const wrapper = document.querySelector('.clients-track-wrapper');
    const track   = document.getElementById('clients-track');
    if (!wrapper || !track) return;

    // Use only the FIRST half of the cards (set A) for position checks
    // because set B is an identical clone for the loop
    const allCards = Array.from(track.querySelectorAll('.client-card'));
    const halfCount = allCards.length / 2;
    // We query all cards and update them all (both sets A & B) for visual consistency
    const cards = allCards;

    // Threshold: cards whose centre is within this many px of the wrapper centre get focus-near
    const FOCUS_ZONE = 180; // px

    let rafId = null;

    function updateFocus() {
      const wRect    = wrapper.getBoundingClientRect();
      const wCentreX = wRect.left + wRect.width / 2;

      cards.forEach(card => {
        const cRect    = card.getBoundingClientRect();
        const cCentreX = cRect.left + cRect.width / 2;
        const dist     = Math.abs(cCentreX - wCentreX);
        card.classList.toggle('focus-near', dist < FOCUS_ZONE);
      });

      rafId = requestAnimationFrame(updateFocus);
    }

    // Start loop when wrapper is visible
    const focusObs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!rafId) rafId = requestAnimationFrame(updateFocus);
        } else {
          if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
        }
      });
    }, { threshold: 0 });

    focusObs.observe(wrapper);
  })();

});
