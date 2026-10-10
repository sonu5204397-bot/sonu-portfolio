/**
 * SONU YADAV — CYBERSECURITY PORTFOLIO
 * script.js — Enhanced JavaScript with premium animations
 */

'use strict';

/* ===================== UTILITY FUNCTIONS ===================== */
function $(selector, context = document) { return context.querySelector(selector); }
function $$(selector, context = document) { return Array.from(context.querySelectorAll(selector)); }

/* ===================== CERTIFICATE DATA (4 completion certs only) ===================== */
const CERTIFICATES = [
  {
    src: 'assets/images/certificates/tutedude-cyber-security.png',
    title: 'Cyber Security Course',
    org: 'Tutedude',
    alt: 'Tutedude Cyber Security Course Certificate — Sonu Yadav, completed 16 August 2026, ID TD-SONU-CS-1301'
  },
  {
    src: 'assets/images/certificates/tutedude-linux.png',
    title: 'Linux Course',
    org: 'Tutedude',
    alt: 'Tutedude Linux Course Certificate — Sonu Yadav, completed 13 September 2026, ID TD-SONU-LN-1608'
  },
  {
    src: 'assets/images/certificates/simplilearn-cyber-security.png',
    title: 'Introduction to Cyber Security',
    org: 'Simplilearn / SkillUp',
    alt: 'Simplilearn SkillUp Introduction to Cyber Security Certificate — Sonu Yadav, Code 10689960'
  },
  {
    src: 'assets/images/certificates/tutedude-ethical-hacking.png',
    title: 'Ethical Hacking Course',
    org: 'Tutedude',
    alt: 'Tutedude Ethical Hacking Course Certificate — Sonu Yadav, completed 6 October 2026, ID TD-SONU-EH-1504'
  },
  {
    src: 'assets/images/certificates/tutedude-python.png',
    title: 'Python Course',
    org: 'Tutedude',
    alt: 'Tutedude Python Course Certificate — Sonu Yadav, completed 3 October 2026, ID TD-SONU-PY-1736'
  }
];

let currentCertIndex = 0;
let isZoomed = false;

/* ===================== NAVBAR ===================== */
function initNavbar() {
  const header = $('.nav-header');
  const hamburger = $('#hamburger');
  const navLinks = $('#nav-links');
  const allNavLinks = $$('.nav-link');

  function handleScroll() {
    header.classList.toggle('scrolled', window.scrollY > 60);
    updateActiveLink();
    updateBackToTop();
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  hamburger.addEventListener('click', function () {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen.toString());
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  allNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('open') &&
        !navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
}

/* ===================== ACTIVE LINK ===================== */
function updateActiveLink() {
  const sections = $$('section[id]');
  const navLinks = $$('.nav-link');
  const scrollY = window.scrollY + window.innerHeight * 0.35;
  let currentSection = '';
  sections.forEach(section => {
    if (scrollY >= section.offsetTop && scrollY < section.offsetTop + section.offsetHeight) {
      currentSection = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) link.classList.add('active');
  });
}

/* ===================== TYPED TEXT ===================== */
function initTypedText() {
  const typedEl = $('#typed-text');
  if (!typedEl) return;
  const strings = ['Cybersecurity ', 'Pentesting ', 'VAPT-Focused ', 'Ethical Hacking ', 'Web Security '];
  let stringIndex = 0, charIndex = 0, isDeleting = false;

  function type() {
    const current = strings[stringIndex];
    if (isDeleting) charIndex--; else charIndex++;
    typedEl.textContent = current.substring(0, charIndex);
    let speed = isDeleting ? 40 : 70;
    if (!isDeleting && charIndex === current.length) {
      setTimeout(() => { isDeleting = true; type(); }, 2200); return;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false; stringIndex = (stringIndex + 1) % strings.length; speed = 400;
    }
    setTimeout(type, speed);
  }
  setTimeout(type, 800);
}

/* ===================== PREMIUM HERO CANVAS ===================== */
function initHeroCanvas() {
  const canvas = $('#hero-canvas');
  if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const ctx = canvas.getContext('2d');
  let particles = [], dataStreams = [], hexagons = [], scanLines = [];
  let animFrameId, time = 0;

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    createParticles();
    createHexagons();
    createDataStreams();
    createScanLines();
  }

  /* Network particle nodes */
  function createParticles() {
    particles = [];
    const count = Math.min(Math.floor((canvas.width * canvas.height) / 10000), 80);
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
        color: Math.random() > 0.7 ? '255, 71, 87' : '0, 212, 255'
      });
    }
  }

  /* Floating hexagons */
  function createHexagons() {
    hexagons = [];
    const count = Math.min(12, Math.floor(canvas.width / 120));
    for (let i = 0; i < count; i++) {
      hexagons.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 30 + 15,
        speed: Math.random() * 0.3 + 0.05,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.008,
        alpha: Math.random() * 0.12 + 0.03,
        color: Math.random() > 0.5 ? '0, 212, 255' : '255, 71, 87'
      });
    }
  }

  /* Vertical digital rain streams */
  function createDataStreams() {
    dataStreams = [];
    const cols = Math.floor(canvas.width / 28);
    for (let i = 0; i < cols; i++) {
      if (Math.random() > 0.65) continue;
      dataStreams.push({
        x: i * 28 + 14,
        y: Math.random() * canvas.height,
        length: Math.random() * 8 + 3,
        speed: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.15 + 0.03,
        chars: []
      });
      for (let j = 0; j < 12; j++) {
        dataStreams[dataStreams.length - 1].chars.push(
          String.fromCharCode(0x30A0 + Math.random() * 96)
        );
      }
    }
  }

  /* Horizontal scan lines */
  function createScanLines() {
    scanLines = [];
    const count = 3;
    for (let i = 0; i < count; i++) {
      scanLines.push({
        y: Math.random() * canvas.height,
        speed: Math.random() * 0.8 + 0.2,
        alpha: Math.random() * 0.06 + 0.02,
        width: canvas.width
      });
    }
  }

  function drawHexagon(ctx, x, y, size, rotation) {
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const angle = rotation + (i * Math.PI) / 3;
      const px = x + size * Math.cos(angle);
      const py = y + size * Math.sin(angle);
      i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
    }
    ctx.closePath();
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    time++;

    /* --- Draw grid overlay --- */
    ctx.strokeStyle = 'rgba(0, 212, 255, 0.025)';
    ctx.lineWidth = 0.5;
    const gridSize = 60;
    for (let x = 0; x < canvas.width; x += gridSize) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += gridSize) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
    }

    /* --- Draw scan lines --- */
    scanLines.forEach(sl => {
      sl.y += sl.speed;
      if (sl.y > canvas.height) sl.y = -5;
      const grad = ctx.createLinearGradient(0, sl.y - 3, 0, sl.y + 3);
      grad.addColorStop(0, 'transparent');
      grad.addColorStop(0.5, `rgba(0, 212, 255, ${sl.alpha})`);
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.fillRect(0, sl.y - 3, canvas.width, 6);
    });

    /* --- Draw hexagons --- */
    hexagons.forEach(h => {
      h.y -= h.speed;
      h.rotation += h.rotSpeed;
      if (h.y + h.size < 0) { h.y = canvas.height + h.size; h.x = Math.random() * canvas.width; }
      drawHexagon(ctx, h.x, h.y, h.size, h.rotation);
      ctx.strokeStyle = `rgba(${h.color}, ${h.alpha})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    });

    /* --- Draw data streams (subtle) --- */
    ctx.font = '11px "JetBrains Mono", monospace';
    dataStreams.forEach(stream => {
      stream.y += stream.speed;
      if (stream.y > canvas.height + 200) stream.y = -200;
      for (let i = 0; i < stream.length; i++) {
        const charAlpha = stream.alpha * ((stream.length - i) / stream.length);
        const isHead = i === 0;
        ctx.fillStyle = isHead
          ? `rgba(180, 255, 255, ${Math.min(stream.alpha * 3, 0.35)})`
          : `rgba(0, 212, 255, ${charAlpha})`;
        ctx.fillText(stream.chars[i % stream.chars.length], stream.x, stream.y - i * 14);
        if (time % 8 === 0) stream.chars[i] = String.fromCharCode(0x30A0 + Math.random() * 96);
      }
    });

    /* --- Draw network connections --- */
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140) {
          const alpha = (1 - dist / 140) * 0.18;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 212, 255, ${alpha})`;
          ctx.lineWidth = 0.7;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    /* --- Draw particles --- */
    particles.forEach(p => {
      /* Pulsing glow */
      const pulse = 0.5 + 0.5 * Math.sin(time * 0.04 + p.x * 0.01);
      const glowAlpha = p.alpha * pulse;

      /* Glow effect */
      const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
      gradient.addColorStop(0, `rgba(${p.color}, ${glowAlpha})`);
      gradient.addColorStop(1, `rgba(${p.color}, 0)`);
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      /* Core dot */
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color}, ${p.alpha * 0.8 + pulse * 0.2})`;
      ctx.fill();

      /* Move */
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
    });

    /* --- Floating circuit-style nodes (periodic) --- */
    if (time % 120 < 60) {
      const pulse = Math.sin(time * 0.052) * 0.5 + 0.5;
      ctx.strokeStyle = `rgba(255, 71, 87, ${0.04 * pulse})`;
      ctx.lineWidth = 1;
      const cx = canvas.width * 0.82;
      const cy = canvas.height * 0.3;
      for (let ring = 1; ring <= 3; ring++) {
        ctx.beginPath();
        ctx.arc(cx, cy, ring * 40 + pulse * 10, 0, Math.PI * 2);
        ctx.stroke();
      }
    }

    animFrameId = requestAnimationFrame(animate);
  }

  const resizeObserver = new ResizeObserver(() => resize());
  resizeObserver.observe(canvas.parentElement);
  resize();
  animate();
}

/* ===================== ADDITIONAL FLOATING SHAPES (body-level) ===================== */
function initFloatingShapes() {
  const el = document.createElement('div');
  el.className = 'bg-shapes';
  el.setAttribute('aria-hidden', 'true');
  el.innerHTML = `
    <div class="bg-shape shape-1"></div>
    <div class="bg-shape shape-2"></div>
    <div class="bg-shape shape-3"></div>
    <div class="bg-shape shape-4"></div>
    <div class="bg-orb orb-1"></div>
    <div class="bg-orb orb-2"></div>
    <div class="bg-orb orb-3"></div>
  `;
  document.body.prepend(el);
}

/* ===================== PROFILE IMAGE FALLBACK ===================== */
function initProfileImageFallback() {
  const img = $('#profile-img');
  const placeholder = $('#profile-placeholder');
  if (!img || !placeholder) return;

  function showPlaceholder() {
    img.style.display = 'none';
    placeholder.style.display = 'flex';
  }

  img.addEventListener('error', showPlaceholder);
  if (img.complete && img.naturalWidth === 0) showPlaceholder();
}

/* ===================== SCROLL ANIMATIONS ===================== */
function initScrollAnimations() {
  const fadeElements = $$('.fade-in');
  if (!fadeElements.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    fadeElements.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );
  fadeElements.forEach(el => observer.observe(el));
}

/* ===================== PROJECT FILTER ===================== */
function initProjectFilter() {
  const filterBtns = $$('.filter-btn');
  const projectCards = $$('.project-card');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      const filter = btn.getAttribute('data-filter');
      projectCards.forEach(card => {
        const show = filter === 'all' || card.getAttribute('data-category') === filter;
        card.style.display = show ? 'flex' : 'none';
        if (show) { card.style.flexDirection = 'column'; card.classList.remove('visible'); requestAnimationFrame(() => card.classList.add('visible')); }
      });
    });
  });
}

/* ===================== CERTIFICATE LIGHTBOX ===================== */
function openCertViewer(index) {
  currentCertIndex = index; isZoomed = false;
  const lightbox = $('#cert-lightbox');
  lightbox.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
  renderCert(); buildDots();
  setTimeout(() => $('#lightbox-close').focus(), 50);
}

function renderCert() {
  const cert = CERTIFICATES[currentCertIndex];
  const img = $('#lightbox-img');
  if (!img || !cert) return;
  isZoomed = false;
  img.classList.remove('zoomed');
  const btn = $('#zoom-btn');
  if (btn) btn.setAttribute('aria-label', 'Zoom in');
  img.src = cert.src;
  img.alt = cert.alt;
  $('#lightbox-title').textContent = cert.title;
  $('#lightbox-org').textContent = cert.org;
  $('#lightbox-counter').textContent = `${currentCertIndex + 1} / ${CERTIFICATES.length}`;
  $$('.lightbox-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentCertIndex);
    dot.setAttribute('aria-selected', i === currentCertIndex ? 'true' : 'false');
  });
}

function buildDots() {
  const dotsContainer = $('#lightbox-dots');
  if (!dotsContainer) return;
  dotsContainer.innerHTML = '';
  CERTIFICATES.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'lightbox-dot' + (i === currentCertIndex ? ' active' : '');
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-label', `View certificate ${i + 1}`);
    dot.setAttribute('aria-selected', i === currentCertIndex ? 'true' : 'false');
    dot.addEventListener('click', () => { currentCertIndex = i; renderCert(); });
    dotsContainer.appendChild(dot);
  });
}

function closeCertViewer() {
  $('#cert-lightbox').setAttribute('hidden', '');
  document.body.style.overflow = '';
  isZoomed = false;
}

function initCertLightbox() {
  const closeBtn = $('#lightbox-close');
  const backdrop = $('#lightbox-backdrop');
  const prevBtn = $('#prev-btn');
  const nextBtn = $('#next-btn');
  const zoomBtn = $('#zoom-btn');
  const lightboxImg = $('#lightbox-img');
  if (!closeBtn) return;

  closeBtn.addEventListener('click', closeCertViewer);
  backdrop.addEventListener('click', closeCertViewer);

  prevBtn.addEventListener('click', () => { currentCertIndex = (currentCertIndex - 1 + CERTIFICATES.length) % CERTIFICATES.length; renderCert(); });
  nextBtn.addEventListener('click', () => { currentCertIndex = (currentCertIndex + 1) % CERTIFICATES.length; renderCert(); });

  function toggleZoom() {
    isZoomed = !isZoomed;
    lightboxImg.classList.toggle('zoomed', isZoomed);
    zoomBtn.setAttribute('aria-label', isZoomed ? 'Zoom out' : 'Zoom in');
  }
  zoomBtn.addEventListener('click', toggleZoom);
  lightboxImg.addEventListener('click', toggleZoom);

  document.addEventListener('keydown', (e) => {
    if ($('#cert-lightbox').hasAttribute('hidden')) return;
    if (e.key === 'Escape') closeCertViewer();
    if (e.key === 'ArrowLeft') { currentCertIndex = (currentCertIndex - 1 + CERTIFICATES.length) % CERTIFICATES.length; renderCert(); }
    if (e.key === 'ArrowRight') { currentCertIndex = (currentCertIndex + 1) % CERTIFICATES.length; renderCert(); }
  });

  let touchStartX = 0;
  const imageArea = $('#lightbox-image-area');
  if (imageArea) {
    imageArea.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    imageArea.addEventListener('touchend', e => {
      const deltaX = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(deltaX) > 50) {
        currentCertIndex = deltaX < 0
          ? (currentCertIndex + 1) % CERTIFICATES.length
          : (currentCertIndex - 1 + CERTIFICATES.length) % CERTIFICATES.length;
        renderCert();
      }
    }, { passive: true });
  }
}

window.openCertViewer = openCertViewer;

/* ===================== CONTACT FORM ===================== */
function initContactForm() {
  const form = $('#contact-form');
  if (!form) return;
  const nameInput = $('#contact-name'), emailInput = $('#contact-email');
  const messageInput = $('#contact-message'), submitBtn = $('#form-submit');
  const successMsg = $('#form-success');

  function showError(id, msg) {
    const el = $(`#${id}-error`), inp = $(`#contact-${id}`);
    if (el) el.textContent = msg;
    if (inp) inp.style.borderColor = 'var(--accent-red)';
  }
  function clearError(id) {
    const el = $(`#${id}-error`), inp = $(`#contact-${id}`);
    if (el) el.textContent = '';
    if (inp) inp.style.borderColor = '';
  }
  function validateEmail(e) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e); }

  function validate() {
    let valid = true;
    clearError('name'); clearError('email'); clearError('message');
    if (!nameInput.value.trim()) { showError('name', 'Please enter your name.'); valid = false; }
    if (!emailInput.value.trim()) { showError('email', 'Please enter your email.'); valid = false; }
    else if (!validateEmail(emailInput.value.trim())) { showError('email', 'Please enter a valid email.'); valid = false; }
    if (!messageInput.value.trim()) { showError('message', 'Please enter a message.'); valid = false; }
    else if (messageInput.value.trim().length < 10) { showError('message', 'Message must be at least 10 characters.'); valid = false; }
    return valid;
  }

  nameInput.addEventListener('blur', () => { if (nameInput.value.trim()) clearError('name'); });
  emailInput.addEventListener('blur', () => { if (validateEmail(emailInput.value.trim())) clearError('email'); });
  messageInput.addEventListener('blur', () => { if (messageInput.value.trim().length >= 10) clearError('message'); });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validate()) return;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Send Message`;
      successMsg.hidden = false;
      form.reset();
      setTimeout(() => { successMsg.hidden = true; }, 8000);
    }, 1200);
  });
}

/* ===================== BACK TO TOP ===================== */
function initBackToTop() {
  const btn = $('#back-to-top');
  if (!btn) return;
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}
function updateBackToTop() {
  const btn = $('#back-to-top');
  if (btn) btn.classList.toggle('visible', window.scrollY > 400);
}

/* ===================== SMOOTH SCROLL ===================== */
function initSmoothScroll() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (href === '#' || href === '#!') return;
    const target = $(href);
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' });
  });
}

/* ===================== PLACEHOLDER TOOLTIPS ===================== */
function initPlaceholderButtons() {
  $$('.placeholder-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const tip = document.createElement('div');
      tip.textContent = 'GitHub link coming soon';
      tip.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:rgba(7,11,20,0.95);border:1px solid rgba(0,212,255,0.3);color:#00d4ff;padding:12px 20px;border-radius:8px;font-size:0.88rem;font-weight:600;z-index:99999;pointer-events:none;backdrop-filter:blur(8px);box-shadow:0 4px 20px rgba(0,0,0,0.4);';
      document.body.appendChild(tip);
      setTimeout(() => tip.remove(), 2000);
    });
  });
}

/* ===================== GLITCH EFFECT ON NAME ===================== */
function initGlitchEffect() {
  const name = $('.hero-name');
  if (!name || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  setInterval(() => {
    if (Math.random() > 0.85) {
      name.classList.add('glitch');
      setTimeout(() => name.classList.remove('glitch'), 200);
    }
  }, 3500);
}

/* ===================== TILT EFFECT ON PROFILE IMAGE ===================== */
function initTiltEffect() {
  const wrapper = $('.hero-image-wrapper');
  if (!wrapper || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  wrapper.addEventListener('mousemove', (e) => {
    const rect = wrapper.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const tiltX = y * 12;
    const tiltY = -x * 12;
    wrapper.querySelector('.hero-image-container').style.transform = `perspective(600px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.03)`;
  });

  wrapper.addEventListener('mouseleave', () => {
    wrapper.querySelector('.hero-image-container').style.transform = 'perspective(600px) rotateX(0) rotateY(0) scale(1)';
  });
}

/* ===================== SECTION ACCENT LINES ===================== */
function initSectionAccents() {
  $$('.section').forEach(section => {
    if (!section.querySelector('.section-accent-line')) {
      const line = document.createElement('div');
      line.className = 'section-accent-line';
      line.setAttribute('aria-hidden', 'true');
      section.prepend(line);
    }
  });
}

/* ===================== INITIALISATION ===================== */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initTypedText();
  initHeroCanvas();
  initFloatingShapes();
  initProfileImageFallback();
  initScrollAnimations();
  initSmoothScroll();
  initBackToTop();
  initProjectFilter();
  initCertLightbox();
  initContactForm();
  initPlaceholderButtons();
  initGlitchEffect();
  initTiltEffect();
  initSectionAccents();

  console.log('%cSonu Yadav — Cybersecurity Portfolio', 'color: #00d4ff; font-size: 14px; font-weight: bold;');
  console.log('%cCybersecurity Enthusiast | Pentesting | VAPT', 'color: #8892b0; font-size: 12px;');
});
