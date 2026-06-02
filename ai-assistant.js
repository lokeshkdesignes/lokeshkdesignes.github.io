/* ═══════════════════════════════════════════════════════
   AI PORTFOLIO ASSISTANT — KNOWLEDGE BASE & LOGIC
   Self-contained, no API key required.
   All answers derived from portfolio content.
═══════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ────────────────────────────────────────────
     KNOWLEDGE BASE
  ──────────────────────────────────────────── */
  const KB = {
    about: `Lokesh K is a Graphic Designer who turned a passion for creativity into a career. Coming from a Computer Science background, he found his true calling in the world of visual design — crafting cinematic posters, bold key visuals, and meaningful brand identities. He believes great design is not just seen — it's felt.`,

    stats: `Lokesh has 4+ years of experience, has delivered 100+ projects, and worked with 40+ clients across entertainment, media, and commercial sectors.`,

    skills: `Lokesh's core skills and tools include:\n• Adobe Photoshop — cinematic compositing & retouching\n• Adobe Illustrator — vector art, illustration & logo design\n• Poster Design — key visuals, film posters, publicity material\n• Key Visual Art — campaign hero imagery\n• Typography — expressive type-led compositions\n• Brand Identity — logo systems and visual identity`,

    software: `Lokesh works primarily with Adobe Creative Suite:\n• Photoshop — photo manipulation, digital painting, compositing\n• Illustrator — vector graphics, logos, illustrations\nHe is fluent in both raster and vector workflows for print, digital, and social media deliverables.`,

    services: `Lokesh offers the following design services:\n1. Cinematic Poster Design — film, web series, OTT key visuals\n2. Publicity Design — campaign visuals, social media creatives\n3. Illustration — digital art, character art, conceptual illustrations\n4. Commercial Poster Design — brand promotional visuals\n5. Logo & Brand Identity Design — logo creation, brand guidelines\n6. Typography Design — expressive type compositions`,

    career: `Career Timeline:\n\n• Senior Graphic Designer @ Toony Studios (September 2025 — Present)\n  Leading visual design for animated and creative studio projects, developing brand assets, campaign materials, and art direction.\n\n• Senior Graphic Designer @ Pranada Media (2024 — September 2025)\n  Designed high-impact visual assets for film and media productions including cinematic posters, campaign graphics, and brand identity work.\n\n• Junior Graphic Designer @ Freelance (2020 — 2023)\n  Delivered branding, illustration, typography, and visual design work for a range of clients across entertainment and commercial sectors.`,

    experience: `Lokesh has 4+ years of professional design experience (2020 – present). He started as a freelance Junior Designer in 2020, progressed to Senior Graphic Designer at Pranada Media in 2024, and currently leads visual design at Toony Studios since September 2025.`,

    portfolio: `Lokesh's portfolio is organised into four categories:\n1. Cinematic Posters (21 works) — film & OTT poster design\n2. Illustrations (14 works) — digital art and character illustrations\n3. Commercial Posters (4 works) — brand & promotional design\n4. Typography (4 works) — type-led design explorations\n5. Logo Designs (2 works) — brand identity & logo creation\n\nYou can view all work in the Work section of this portfolio.`,

    clients: `Clients & Collaborations include:\n• Jessy Paul (YouTube)\n• Katrukathalu (YouTube)\n• Life in Shorts (YouTube)\n• Pallevindu Hyderabad (Instagram)\n• Pondy Parottas Hyderabad (Instagram)\n• Pranada Media (YouTube)\n• RajPrakash Paul (YouTube)\n• Sandeep Nadimpalli (YouTube)\n• Toony Studios (YouTube)\n• VAAS Family (YouTube)\n• WhatKnot Telugu (YouTube)\n• Funmoji (YouTube)\n• Funmoji 2D (YouTube)`,

    contact: `You can reach Lokesh K through:\n• Contact Form — fill in the form in the Contact section of this page\n• LinkedIn — linkedin.com/in/lokeshk79\n• Behance — behance.net/Lokesh_k\n• Instagram — instagram.com/sun_nylokesh`,

    who: `Lokesh K is a Graphic Designer & Key Visual Artist specialising in cinematic poster design, publicity design, brand identity, illustration, and typography. He has 4+ years of experience, has worked on 100+ projects, and collaborated with 40+ clients — mostly in the Telugu entertainment and media industry. He currently serves as Senior Graphic Designer at Toony Studios.`,
  };

  /* ────────────────────────────────────────────
     RESPONSE ENGINE
  ──────────────────────────────────────────── */
  function getResponse(input) {
    const q = input.toLowerCase().trim();

    // Greetings
    if (/^(hi|hello|hey|howdy|sup|what'?s up|good (morning|afternoon|evening))/.test(q)) {
      return `Hello! 👋 I'm Lokesh's AI Portfolio Assistant. I can tell you about his work, experience, skills, clients, and how to get in touch.\n\nWhat would you like to know?`;
    }

    // Who is Lokesh / about him
    if (/who (is|are) lokesh|tell me about lokesh|about (lokesh|him|yourself)|introduce/i.test(q)) {
      return KB.who;
    }

    // Experience / years
    if (/how many years|years of experience|experience|how long|when did he start/i.test(q)) {
      return KB.experience;
    }

    // Career / work history / jobs / companies worked at
    if (/career|work history|job|employment|where (has|did) he work|previous (company|role)|timeline/i.test(q)) {
      return KB.career;
    }

    // Skills
    if (/skill|what can (he|lokesh) do|expertise|good at|speciali[sz]|proficient|talented/i.test(q)) {
      return KB.skills;
    }

    // Software / tools
    if (/software|tool|photoshop|illustrator|adobe|program|application/i.test(q)) {
      return KB.software;
    }

    // Services / offer
    if (/service|offer|provide|what do (you|he|lokesh) (do|make|create)|hire|work|commission/i.test(q)) {
      return KB.services;
    }

    // Portfolio / work
    if (/portfolio|work|project|design(s)?|poster|illustration|logo|typography|commercial/i.test(q)) {
      return KB.portfolio;
    }

    // Clients / collaborations
    if (/client|collab|brand|company|compan|who (has|did) he work(ed)? with|partner|youtube/i.test(q)) {
      return KB.clients;
    }

    // Contact / reach
    if (/contact|reach|email|linkedin|behance|instagram|social|message|get in touch|hire/i.test(q)) {
      return KB.contact;
    }

    // About him (generic)
    if (/about|background|story|who|lokesh/i.test(q)) {
      return KB.about + '\n\n' + KB.stats;
    }

    // Thanks
    if (/thank(s| you)|ty|cheers|appreciate/i.test(q)) {
      return `You're welcome! 😊 Feel free to ask anything else about Lokesh's work or how to get in touch.`;
    }

    // Bye
    if (/bye|goodbye|see you|cya|later/i.test(q)) {
      return `Thanks for stopping by! Feel free to come back anytime. 👋`;
    }

    // Out of scope
    return `I can only answer questions related to Lokesh K and his professional work. 🎨\n\nYou can ask me about his skills, services, career, portfolio, clients, or contact information!`;
  }

  /* ────────────────────────────────────────────
     BUILD HTML
  ──────────────────────────────────────────── */
  function buildWidget() {
    // ── Bubble ──
    const bubble = document.createElement('button');
    bubble.id = 'ai-chat-bubble';
    bubble.setAttribute('aria-label', 'Open AI Portfolio Assistant');
    bubble.setAttribute('aria-expanded', 'false');
    bubble.innerHTML = `
      <div class="bubble-dot" aria-hidden="true"></div>
      <span class="bubble-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.02 2 11c0 2.65 1.18 5.03 3.06 6.72L4 22l4.54-1.51C9.61 20.81 10.78 21 12 21c5.52 0 10-4.02 10-9S17.52 2 12 2z" fill="#fff"/>
          <circle cx="8.5" cy="11" r="1.2" fill="#1C1C1E"/>
          <circle cx="12" cy="11" r="1.2" fill="#1C1C1E"/>
          <circle cx="15.5" cy="11" r="1.2" fill="#1C1C1E"/>
        </svg>
      </span>
      <span class="bubble-close" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18M6 6l12 12" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </span>`;

    // ── Panel ──
    const panel = document.createElement('div');
    panel.id = 'ai-chat-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', 'AI Portfolio Assistant');
    panel.setAttribute('aria-modal', 'false');
    panel.innerHTML = `
      <!-- Header -->
      <div class="ai-panel-header">
        <div class="ai-header-avatar" aria-hidden="true">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h2a7 7 0 017 7H4a7 7 0 017-7h2V5.73A2 2 0 0110 4a2 2 0 012-2zM7 15v2a5 5 0 0010 0v-2H7zm8.5 1.5a1 1 0 110 2 1 1 0 010-2zm-7 0a1 1 0 110 2 1 1 0 010-2z"/>
          </svg>
        </div>
        <div class="ai-header-info">
          <div class="ai-header-name">LK Assistant</div>
          <div class="ai-header-status">
            <span class="ai-status-dot active" id="ai-status-dot"></span>
            <span id="ai-status-text">Online</span>
          </div>
        </div>
        <button class="ai-header-close" id="ai-panel-close" aria-label="Close assistant">✕</button>
      </div>

      <!-- Messages -->
      <div class="ai-messages" id="ai-messages" role="log" aria-live="polite" aria-label="Chat messages"></div>

      <!-- Suggested chips -->
      <div class="ai-suggestions" id="ai-suggestions">
        <div class="ai-suggestion-label">Suggested</div>
        <div class="ai-suggestion-chips">
          <button class="ai-chip" data-q="Who is Lokesh?">Who is Lokesh?</button>
          <button class="ai-chip" data-q="What services do you offer?">Services</button>
          <button class="ai-chip" data-q="Which companies have you worked with?">Clients</button>
          <button class="ai-chip" data-q="How many years of experience do you have?">Experience</button>
          <button class="ai-chip" data-q="How can I contact you?">Contact</button>
        </div>
      </div>

      <!-- Quick actions -->
      <div class="ai-quick-actions" aria-label="Quick actions">
        <a href="#work" class="ai-quick-btn" id="ai-qa-work" aria-label="View Work">
          <svg viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
          View Work
        </a>
        <a href="#contact" class="ai-quick-btn" id="ai-qa-contact" aria-label="Contact">
          <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
          Contact
        </a>
        <a href="https://www.linkedin.com/in/lokeshk79/" target="_blank" rel="noopener" class="ai-quick-btn" id="ai-qa-linkedin" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24"><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
          LinkedIn
        </a>
        <a href="https://www.behance.net/Lokesh_k" target="_blank" rel="noopener" class="ai-quick-btn" id="ai-qa-behance" aria-label="Behance">
          <svg viewBox="0 0 24 24"><path d="M7.5 11c1.38 0 2.5-.56 2.5-2.12S8.88 6.5 7.5 6.5H3v9h4.5c1.62 0 3-.75 3-2.62S9.12 11 7.5 11zM5 8h2.25c.69 0 1.25.31 1.25 1s-.56 1-1.25 1H5V8zm2.5 6H5v-2.5h2.5c.81 0 1.5.38 1.5 1.25S8.31 14 7.5 14zM15 7.5c-2.49 0-4.5 1.79-4.5 4.5s2.01 4.5 4.5 4.5c1.93 0 3.28-.79 4.04-2.5h-2.14c-.28.5-.97.88-1.9.88-1.38 0-2.25-.81-2.38-2h6.5c.05-.33.07-.57.07-.88 0-2.71-2.01-4.5-4.5-4.5h.31zm-2.19 3.5c.25-1 1.06-1.62 2.19-1.62s1.94.63 2.19 1.62h-4.38zM14 5h5v1.5h-5V5z"/></svg>
          Behance
        </a>
      </div>

      <!-- Input -->
      <div class="ai-input-area">
        <textarea
          id="ai-chat-input"
          placeholder="Ask me about Lokesh..."
          rows="1"
          aria-label="Type your message"
          maxlength="400"
        ></textarea>
        <button id="ai-send-btn" aria-label="Send message">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
          </svg>
        </button>
      </div>
      <div class="ai-powered-by">AI Portfolio Assistant • Lokesh K</div>`;

    document.body.appendChild(bubble);
    document.body.appendChild(panel);

    return { bubble, panel };
  }

  /* ────────────────────────────────────────────
     CHAT LOGIC
  ──────────────────────────────────────────── */
  function initChat(bubble, panel) {
    const messagesEl   = panel.querySelector('#ai-messages');
    const inputEl      = panel.querySelector('#ai-chat-input');
    const sendBtn      = panel.querySelector('#ai-send-btn');
    const closeBtn     = panel.querySelector('#ai-panel-close');
    const chips        = panel.querySelectorAll('.ai-chip');
    const statusDot    = panel.querySelector('#ai-status-dot');
    const statusText   = panel.querySelector('#ai-status-text');
    const suggestionsEl = panel.querySelector('#ai-suggestions');

    let isOpen     = false;
    let hasGreeted = false;
    let isTyping   = false;

    /* ── Helpers ── */
    function scrollToBottom() {
      messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    function appendMsg(text, role) {
      const wrap = document.createElement('div');
      wrap.className = `ai-msg ${role}`;

      const avatarIcon = role === 'bot'
        ? `<svg viewBox="0 0 24 24"><path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h2a7 7 0 017 7H4a7 7 0 017-7h2V5.73A2 2 0 0110 4a2 2 0 012-2zM7 15v2a5 5 0 0010 0v-2H7z"/></svg>`
        : `<svg viewBox="0 0 24 24"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>`;

      // Convert newlines to <br> and preserve bullet formatting
      const formatted = text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\n/g, '<br>');

      wrap.innerHTML = `
        <div class="ai-msg-avatar" aria-hidden="true">${avatarIcon}</div>
        <div class="ai-msg-bubble">${formatted}</div>`;

      messagesEl.appendChild(wrap);
      scrollToBottom();
      return wrap;
    }

    function showTyping() {
      const wrap = document.createElement('div');
      wrap.className = 'ai-msg bot typing';
      wrap.id = 'ai-typing-indicator';
      wrap.innerHTML = `
        <div class="ai-msg-avatar" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h2a7 7 0 017 7H4a7 7 0 017-7h2V5.73A2 2 0 0110 4a2 2 0 012-2zM7 15v2a5 5 0 0010 0v-2H7z"/></svg>
        </div>
        <div class="ai-msg-bubble">
          <div class="ai-typing-dots" aria-label="Thinking…">
            <span></span><span></span><span></span>
          </div>
        </div>`;
      messagesEl.appendChild(wrap);
      scrollToBottom();

      // Update status
      statusDot.classList.remove('active');
      statusText.textContent = 'Thinking…';
    }

    function hideTyping() {
      const indicator = document.getElementById('ai-typing-indicator');
      if (indicator) indicator.remove();

      statusDot.classList.add('active');
      statusText.textContent = 'Online';
    }

    function sendMessage(text) {
      if (!text.trim() || isTyping) return;

      // Hide suggestions after first real question
      if (suggestionsEl) suggestionsEl.style.display = 'none';

      // User bubble
      appendMsg(text, 'user');
      inputEl.value = '';
      inputEl.style.height = 'auto';

      // Typing delay
      isTyping = true;
      showTyping();

      const delay = 600 + Math.min(text.length * 8, 900);
      setTimeout(() => {
        hideTyping();
        const response = getResponse(text);
        appendMsg(response, 'bot');
        isTyping = false;
      }, delay);
    }

    /* ── Toggle Panel ── */
    function openPanel() {
      isOpen = true;
      panel.classList.add('open');
      bubble.classList.add('open');
      bubble.setAttribute('aria-expanded', 'true');

      if (!hasGreeted) {
        hasGreeted = true;
        setTimeout(() => {
          appendMsg(`Hi there! 👋 I'm Lokesh's AI Portfolio Assistant.\n\nAsk me anything about his work, experience, skills, services, or how to get in touch!`, 'bot');
        }, 300);
      }

      setTimeout(() => inputEl.focus(), 400);
    }

    function closePanel() {
      isOpen = false;
      panel.classList.remove('open');
      bubble.classList.remove('open');
      bubble.setAttribute('aria-expanded', 'false');
    }

    /* ── Event Listeners ── */
    bubble.addEventListener('click', () => {
      if (isOpen) closePanel(); else openPanel();
    });

    closeBtn.addEventListener('click', closePanel);

    sendBtn.addEventListener('click', () => sendMessage(inputEl.value));

    inputEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage(inputEl.value);
      }
    });

    // Auto-resize textarea
    inputEl.addEventListener('input', () => {
      inputEl.style.height = 'auto';
      inputEl.style.height = Math.min(inputEl.scrollHeight, 100) + 'px';
    });

    // Suggested chips
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        sendMessage(chip.dataset.q);
      });
    });

    // Quick action buttons — close panel on same-page links
    panel.querySelectorAll('.ai-quick-btn[href^="#"]').forEach(btn => {
      btn.addEventListener('click', () => {
        closePanel();
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) closePanel();
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (isOpen && !panel.contains(e.target) && !bubble.contains(e.target)) {
        closePanel();
      }
    });

    // Auto-open greeting after 5 seconds (first visit only)
    const alreadySeen = sessionStorage.getItem('ai-assistant-seen');
    if (!alreadySeen) {
      sessionStorage.setItem('ai-assistant-seen', '1');
      setTimeout(() => {
        if (!isOpen) openPanel();
      }, 5000);
    }
  }

  /* ────────────────────────────────────────────
     INIT
  ──────────────────────────────────────────── */
  function init() {
    const { bubble, panel } = buildWidget();
    initChat(bubble, panel);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
