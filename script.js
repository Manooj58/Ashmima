document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('openModal');
  const music = document.getElementById('bgMusic');
  const closeBtn = document.getElementById('closeModal');
  const modal = document.getElementById('modal');
  const petalsContainer = document.querySelector('.petals');

  openBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');

    music.volume = 0.5; // soft & romantic
    music.play().catch(() => {
      console.log('Music blocked until user interaction');
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    music.pause();
  });
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.add('hidden');
  });

  /* 🌸 Dynamic Falling Flowers */
  const flowers = ['🌸', '🌹', '💮'];

  function createFlower() {
    const flower = document.createElement('span');
    flower.classList.add('flower');
    flower.innerText = flowers[Math.floor(Math.random() * flowers.length)];

    flower.style.left = Math.random() * 100 + 'vw';
    flower.style.fontSize = Math.random() * 16 + 18 + 'px';
    flower.style.animationDuration = Math.random() * 5 + 5 + 's';

    petalsContainer.appendChild(flower);

    setTimeout(() => {
      flower.remove();
    }, 10000);
  }

  setInterval(createFlower, 400);

  /* Fade in */
  document.body.style.opacity = 0;
  document.body.style.transition = 'opacity 1.5s ease';
  setTimeout(() => {
    document.body.style.opacity = 1;
  }, 100);
});
