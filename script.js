document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('openModal');
  const closeBtn = document.getElementById('closeModal');
  const modal = document.getElementById('modal');

  openBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  // Close modal when tapping outside
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });

  // Fade-in effect
  document.body.style.opacity = 0;
  document.body.style.transition = 'opacity 1.5s ease';
  setTimeout(() => {
    document.body.style.opacity = 1;
  }, 100);
});
