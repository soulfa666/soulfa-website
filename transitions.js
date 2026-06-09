/* SoulFa shared scripts
   - Page transition (fade-to-black on internal nav)
   - Nav scrolled state
   - Reveal on scroll */

(function () {
  // Page transition: fade out on click, fade in on load
  function setupTransitions() {
    const overlay = document.querySelector('.page-transition');
    if (!overlay) return;

    // Fade IN on page load (overlay fades away)
    requestAnimationFrame(() => {
      overlay.classList.add('gone');
    });

    // Intercept internal HTML link clicks
    document.querySelectorAll('a[href]').forEach((link) => {
      const href = link.getAttribute('href');
      if (!href) return;
      // Only intercept .html links that are local (not target=_blank, not external)
      const isInternalHtml = (
        (href.endsWith('.html') || href === '/' || href === 'index.html') &&
        !link.target &&
        !href.startsWith('http')
      );
      if (!isInternalHtml) return;

      link.addEventListener('click', (e) => {
        e.preventDefault();
        overlay.classList.remove('gone');
        setTimeout(() => {
          window.location.href = href;
        }, 580);
      });
    });
  }

  // Nav: add scrolled class on scroll
  // Homepage handles its own nav via hero IntersectionObserver — skip here
  function setupNav() {
    const nav = document.getElementById('topnav');
    if (!nav) return;
    if (document.getElementById('hero')) return; // homepage uses its own observer
    function onScroll() {
      if (window.scrollY > 60) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Nav hamburger toggle
  function setupNavToggle() {
    var toggle = document.getElementById('nav-toggle');
    var nav    = document.getElementById('topnav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });

    // Close when a menu link is clicked
    nav.querySelectorAll('ul a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  // Reveal elements on scroll
  function setupReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('in');
      });
    }, { threshold: 0.18 });
    els.forEach((el) => obs.observe(el));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setupTransitions();
      setupNav();
      setupReveal();
      setupNavToggle();
    });
  } else {
    setupTransitions();
    setupNav();
    setupReveal();
    setupNavToggle();
  }
})();
