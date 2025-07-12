document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('./.text').forEach(el => {
      el.addEventListener('copy', e => {
        e.preventDefault();
        alert('Copying is not allowed for this text.');
      });
    });
  });
  