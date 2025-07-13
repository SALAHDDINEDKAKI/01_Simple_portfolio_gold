
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.contact-section .group .text').forEach(el => {
      el.addEventListener('copy', e => {
        e.preventDefault();
        alert('Copying is not allowed for this text.');
      });
    });
  });  