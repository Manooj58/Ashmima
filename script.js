document.addEventListener('DOMContentLoaded', function () {
  const noBtn = document.getElementById('noBtn');
  const yesBtn = document.getElementById('yesBtn');
  const card = document.querySelector('.card');

  if (!noBtn || !yesBtn || !card) return;

  noBtn.addEventListener('click', function () {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  });

  yesBtn.addEventListener('click', function () {
    card.innerHTML = `
      <p class="emoji">🥰</p>
      <h1>Yayyy!</h1>
      <p class="message">
        I knew it 😘<br /><br />
        Thank you for being my person,
        my comfort, and my forever ❤️
      </p>
      <p class="question">Happy Valentine’s Day 💐</p>
    `;
  });
});
