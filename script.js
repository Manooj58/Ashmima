const noBtn = document.getElementById('noBtn');

noBtn.addEventListener('click', moveButton);

function moveButton() {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

function yesClicked() {
  document.querySelector('.card').innerHTML = `
    <p class="emoji">🥰</p>
    <h1>Yayyy!</h1>
    <p class="message">
      I knew it 😘<br /><br />
      Thank you for being my person, my partner,
      and my favorite notification ❤️
    </p>
    <p class="question">Happy Valentine’s Day 💐</p>
  `;
}
