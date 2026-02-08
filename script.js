document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('openModal');
  const closeBtn = document.getElementById('closeModal');
  const modal = document.getElementById('modal');
  const music = document.getElementById('bgMusic');

  // OPEN POPUP + MUSIC
  openBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
    music.volume = 0.5;
    music.play().catch(() => {});
  });

  // CLOSE POPUP
  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    music.pause();
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });

  // 🍫 BACKGROUND CHOCOLATE FALL
  const chocolates = ['🍫', '🍪', '🍩', '🍬'];

  function dropChocolate() {
    const el = document.createElement('div');
    el.className = 'falling-choco';
    el.innerText = chocolates[Math.floor(Math.random() * chocolates.length)];
    el.style.left = Math.random() * 100 + 'vw';
    el.style.fontSize = 14 + Math.random() * 18 + 'px';
    el.style.animationDuration = 6 + Math.random() * 6 + 's';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 14000);
  }

  setInterval(dropChocolate, 450);
});
