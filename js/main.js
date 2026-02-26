// ============================================================
//  LILLI BRENNER PORTFOLIO — Main Script
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ----- Active nav link highlight -----
  const currentPath = window.location.pathname;

  document.querySelectorAll('.navbar__links a').forEach(link => {
    const linkPath = link.getAttribute('href');
    // Simple check: if the link href maps to the current section
    if (linkPath && currentPath.includes(linkPath) && linkPath !== '/') {
      link.classList.add('active');
    }
  });

  // ----- Overview strip: keyboard accessibility -----
  document.querySelectorAll('.overview-strip__item').forEach(item => {
    item.setAttribute('tabindex', '0');
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        const link = item.querySelector('a');
        if (link) link.click();
      }
    });
  });

});
