document.addEventListener('DOMContentLoaded', function () {
  const CORRECT_PASSWORD = '2202'; // 🔴 CHANGE THIS (DDMM)

  const loginScreen = document.getElementById('loginScreen');
  const homeScreen = document.getElementById('homeScreen');

  const passwordInput = document.getElementById('passwordInput');
  const enterBtn = document.getElementById('enterBtn');
  const errorMsg = document.getElementById('errorMsg');

  const yesBtn = document.getElementById('yesBtn');
  const noBtn = document.getElementById('noBtn');

  // PASSWORD CHECK
  enterBtn.addEventListener('click', function () {
    const entered = passwordInput.value;

    if (entered === CORRECT_PASSWORD) {
      loginScreen.classList.add('hidden');
      homeScreen.classList.remove('hidden');
    } else {
      errorMsg.innerText = 'Wrong date 😅 Try again!';
      passwordInput.value = '';
    }
  });

  // NO BUTTON MOVES
  noBtn.addEventListener('click', function () {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  });

  // YES BUTTON
  yesBtn.addEventListener('click', function () {
    homeScreen.innerHTML = `
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
