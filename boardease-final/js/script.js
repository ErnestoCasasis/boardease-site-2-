// ============================================
// BoardEase — script.js
// ============================================

// --- HAMBURGER MENU ---
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// --- HEURISTIC EVALUATION TABS ---
function showTab(memberId) {
  // Hide all tab contents
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.remove('active');
  });

  // Remove active from all buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  // Show selected tab
  const targetTab = document.getElementById('tab-' + memberId);
  if (targetTab) targetTab.classList.add('active');

  // Set active button
  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(btn => {
    if (btn.getAttribute('onclick') === "showTab('" + memberId + "')") {
      btn.classList.add('active');
    }
  });
}

// --- SCROLL FADE-UP ANIMATION ---
function handleScrollAnimation() {
  const elements = document.querySelectorAll('.fade-up');
  const windowHeight = window.innerHeight;

  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < windowHeight - 60) {
      el.classList.add('visible');
    }
  });
}

// Run on load and scroll
window.addEventListener('load',   handleScrollAnimation);
window.addEventListener('scroll', handleScrollAnimation);

// --- NAVBAR: add shadow on scroll ---
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.5)';
  } else {
    navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.4)';
  }
});
