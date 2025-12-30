// =====================
// Set current year
// =====================
const yearEl = document.getElementById('date');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// =====================
// Navigation toggle
// =====================
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    // Toggle the nav list
    navLinks.classList.toggle('show');

    // Toggle hamburger <-> X
    navToggle.innerHTML = navLinks.classList.contains('show') ? '&times;' : '&#9776;';
  });

  // Close nav when a link is clicked
  const navLinkItems = document.querySelectorAll('.nav-link');
  navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
      navToggle.innerHTML = '&#9776;';
    });
  });
}

// =====================
// Scroll to top button
// =====================
const scrollToTopBtn = document.querySelector('.scroll-to-top');

if (scrollToTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  });

  scrollToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// =====================
// Smooth scroll for internal links
// =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});
