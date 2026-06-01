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

  /* ═══ CLIENTS CAROUSEL — INTERACTIVE ENGINE ═══ */
  (function initClientsCarousel() {
    const wrapper = document.querySelector('.clients-track-wrapper');
    const track   = document.getElementById('clients-track');
    if (!wrapper || !track) return;

    const cards = Array.from(track.querySelectorAll('.client-card'));

    /* ── Constants ── */
    const AUTO_SPEED      = 0.55;   // px/frame auto-scroll speed
    const RESUME_DELAY    = 2500;   // ms before auto-scroll resumes after interaction
    const FOCUS_ZONE      = 180;    // px from wrapper centre for focus-near class
    const MOMENTUM_DECAY  = 0.92;   // friction factor per frame (0–1)
    const WHEEL_FACTOR    = 0.8;    // wheel delta multiplier
    const MIN_VELOCITY    = 0.05;   // velocity below which momentum stops

    /* ── State ── */
    let offset        = 0;          // current translateX (negative = moved left)
    let halfWidth     = 0;          // width of one set of cards (for seamless loop)
    let velocity      = 0;          // current momentum velocity (px/frame)
    let isDragging    = false;
    let dragStartX    = 0;
    let dragLastX     = 0;
    let dragVelocity  = 0;
    let autoScroll    = true;
    let resumeTimer   = null;
    let rafId         = null;
    let isVisible     = false;

    /* ── Measure the scrollable half-width ── */
    function measureHalfWidth() {
      // Sum up widths + gaps of the first half of cards (Set A)
      const half = Math.floor(cards.length / 2);
      const gap  = 32; // matches CSS gap
      let w = 0;
      for (let i = 0; i < half; i++) {
        w += cards[i].getBoundingClientRect().width;
      }
      w += gap * (half); // gap after each card including trailing
      halfWidth = w;
    }

    /* ── Apply transform ── */
    function applyOffset() {
      track.style.transform = `translateX(${offset}px)`;
    }

    /* ── Seamless loop: wrap offset when it exceeds half-width ── */
    function wrapOffset() {
      if (halfWidth === 0) return;
      // Scrolling left: once we've scrolled a full set, reset
      if (offset <= -halfWidth) {
        offset += halfWidth;
      }
      // Scrolling right: if user drags right past 0, wrap to the other end
      if (offset > 0) {
        offset -= halfWidth;
      }
    }

    /* ── Centre-focus depth effect ── */
    function updateFocus() {
      const wRect    = wrapper.getBoundingClientRect();
      const wCentreX = wRect.left + wRect.width / 2;
      cards.forEach(card => {
        const cRect    = card.getBoundingClientRect();
        const cCentreX = cRect.left + cRect.width / 2;
        card.classList.toggle('focus-near', Math.abs(cCentreX - wCentreX) < FOCUS_ZONE);
      });
    }

    /* ── Main animation loop ── */
    function tick() {
      if (!isVisible) { rafId = null; return; }
      rafId = requestAnimationFrame(tick);

      if (isDragging) {
        // During drag: position is set directly by pointer events; just update focus
        updateFocus();
        return;
      }

      if (autoScroll) {
        // Auto-scroll: constant leftward drift
        offset -= AUTO_SPEED;
      } else if (Math.abs(velocity) > MIN_VELOCITY) {
        // Momentum / inertia scrolling
        offset += velocity;
        velocity *= MOMENTUM_DECAY;
      }

      wrapOffset();
      applyOffset();
      updateFocus();
    }

    /* ── Pause / resume helpers ── */
    function pauseAuto() {
      autoScroll = false;
      clearTimeout(resumeTimer);
    }

    function scheduleResume() {
      clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => {
        velocity   = 0;
        autoScroll = true;
      }, RESUME_DELAY);
    }

    /* ── Mouse drag ── */
    wrapper.addEventListener('mousedown', e => {
      if (e.button !== 0) return;
      isDragging = true;
      dragStartX = e.clientX;
      dragLastX  = e.clientX;
      dragVelocity = 0;
      velocity     = 0;
      pauseAuto();
      wrapper.classList.add('is-dragging');
      e.preventDefault();
    });

    window.addEventListener('mousemove', e => {
      if (!isDragging) return;
      const dx   = e.clientX - dragLastX;
      dragVelocity = dx;            // track velocity for momentum release
      offset      += dx;
      dragLastX    = e.clientX;
      wrapOffset();
      applyOffset();
    });

    window.addEventListener('mouseup', () => {
      if (!isDragging) return;
      isDragging = false;
      wrapper.classList.remove('is-dragging');
      // Hand off velocity to momentum engine
      velocity = dragVelocity;
      scheduleResume();
    });

    /* ── Mouse wheel ── */
    wrapper.addEventListener('wheel', e => {
      // Treat any wheel event over the wrapper as horizontal scroll
      e.preventDefault();
      pauseAuto();
      const delta = (e.deltaX !== 0 ? e.deltaX : e.deltaY) * WHEEL_FACTOR;
      velocity = delta * 0.5;
      offset  -= delta;
      wrapOffset();
      applyOffset();
      scheduleResume();
    }, { passive: false });

    /* ── Touch / swipe ── */
    let touchStartX  = 0;
    let touchLastX   = 0;
    let touchVelocity = 0;

    wrapper.addEventListener('touchstart', e => {
      touchStartX   = e.touches[0].clientX;
      touchLastX    = touchStartX;
      touchVelocity = 0;
      velocity      = 0;
      pauseAuto();
    }, { passive: true });

    wrapper.addEventListener('touchmove', e => {
      const x  = e.touches[0].clientX;
      const dx = x - touchLastX;
      // Only hijack horizontal swipes to avoid blocking page scroll
      const dy = Math.abs(e.touches[0].clientY - (e.changedTouches[0]?.clientY || 0));
      touchVelocity = dx;
      offset       += dx;
      touchLastX    = x;
      wrapOffset();
      applyOffset();
    }, { passive: true });

    wrapper.addEventListener('touchend', () => {
      velocity = touchVelocity;
      scheduleResume();
    }, { passive: true });

    /* ── IntersectionObserver: only run when visible ── */
    const visObs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        isVisible = entry.isIntersecting;
        if (isVisible && !rafId) {
          measureHalfWidth();
          rafId = requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0 });

    visObs.observe(wrapper);

    /* ── Re-measure on resize ── */
    window.addEventListener('resize', () => {
      measureHalfWidth();
      wrapOffset();
    }, { passive: true });

    /* ── Initial measurement (after fonts / images settle) ── */
    window.addEventListener('load', () => {
      measureHalfWidth();
    });
  })();

});
