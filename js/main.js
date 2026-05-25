/* ══════════════════════════════════════════════════
   ISHRAK SENPAI UNIVERSE — main.js
   ══════════════════════════════════════════════════ */

'use strict';

// ─── THEME TOGGLE ───────────────────────────────────
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

function setTheme(theme) {
  html.setAttribute('data-theme', theme);
  try { localStorage.setItem('isu-theme', theme); } catch (_) {}
}

// Load saved or system preference
try {
  const saved = localStorage.getItem('isu-theme');
  if (saved) {
    setTheme(saved);
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }
} catch (_) {
  setTheme('dark');
}

themeToggle?.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  setTheme(current === 'dark' ? 'light' : 'dark');
});


// ─── NAVBAR ─────────────────────────────────────────
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

// Scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar?.classList.add('scrolled');
  } else {
    navbar?.classList.remove('scrolled');
  }
}, { passive: true });

// Hamburger toggle
hamburger?.addEventListener('click', () => {
  const isOpen = mobileMenu?.classList.toggle('open');
  hamburger.classList.toggle('active');
  hamburger.setAttribute('aria-expanded', String(isOpen));
});

// Close mobile menu on link click
mobileMenu?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger?.classList.remove('active');
    hamburger?.setAttribute('aria-expanded', 'false');
  });
});

// Highlight active nav link on scroll
const sections = document.querySelectorAll('section[id], footer[id]');
const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');

function updateActiveLink() {
  const scrollY = window.scrollY + 120;
  let active = '';
  sections.forEach(sec => {
    if (sec.offsetTop <= scrollY && sec.offsetTop + sec.offsetHeight > scrollY) {
      active = '#' + sec.id;
    }
  });
  navLinks.forEach(link => {
    link.classList.toggle('active-link', link.getAttribute('href') === active);
  });
}
window.addEventListener('scroll', updateActiveLink, { passive: true });


// ─── GALLERY TABS ────────────────────────────────────
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;

    tabBtns.forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    tabContents.forEach(c => c.classList.remove('active'));

    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    document.getElementById(`tab-${target}`)?.classList.add('active');
  });
});


// ─── SCROLL ANIMATIONS ───────────────────────────────
function revealOnScroll() {
  const cards = document.querySelectorAll('.overview-card:not(.visible)');
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      const delay = (card.dataset.delay || 0) / 1000;
      card.style.setProperty('--delay', `${delay}s`);
      card.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll, { passive: true });
revealOnScroll(); // run once on load


// ─── BACK TO TOP ─────────────────────────────────────
const backTop = document.getElementById('backTop');

window.addEventListener('scroll', () => {
  backTop?.classList.toggle('visible', window.scrollY > 500);
}, { passive: true });

backTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


// ─── STAR FIELD (dynamic) ───────────────────────────
const starField = document.getElementById('starField');
if (starField) {
  const frag = document.createDocumentFragment();
  for (let i = 0; i < 60; i++) {
    const star = document.createElement('div');
    const size = Math.random() * 2 + 0.5;
    star.style.cssText = `
      position:absolute;
      width:${size}px;
      height:${size}px;
      border-radius:50%;
      background:rgba(255,255,255,${Math.random() * 0.6 + 0.2});
      left:${Math.random() * 100}%;
      top:${Math.random() * 100}%;
      animation: twinkle ${Math.random() * 3 + 2}s ease infinite ${Math.random() * 3}s;
    `;
    frag.appendChild(star);
  }
  starField.appendChild(frag);

  // Add twinkle keyframes if not already present
  if (!document.getElementById('twinkle-style')) {
    const style = document.createElement('style');
    style.id = 'twinkle-style';
    style.textContent = `
      @keyframes twinkle {
        0%, 100% { opacity: 0.3; transform: scale(1); }
        50%       { opacity: 1;   transform: scale(1.4); }
      }
    `;
    document.head.appendChild(style);
  }
}


// ─── SMOOTH SCROLL for anchor links ─────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 64; // navbar height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});


// ─── IMAGE ERROR FALLBACK ────────────────────────────
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('error', function() {
    // Remove broken image icon
    this.alt = '';
    this.style.visibility = 'hidden';
    const parent = this.closest('.image-card, .channel-banner-wrap');
    if (parent) parent.classList.add('img-error');
  });
});
