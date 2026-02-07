// Soft fade-in animation
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.opacity = 0;
  document.body.style.transition = 'opacity 1.5s ease';
  setTimeout(() => {
    document.body.style.opacity = 1;
  }, 100); // Soft fade-in effect
  document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = 0;
    document.body.style.transition = 'opacity 1.8s ease';
    setTimeout(() => {
      document.body.style.opacity = 1;
    }, 100);
  });
});
