/* ELEMENTS */
const openMessage = document.getElementById('openMessage');
const messageModal = document.getElementById('messageModal');
const closeMessage = document.getElementById('closeMessage');

const yesBtn = document.getElementById('yesBtn');
const yesModal = document.getElementById('yesModal');
const closeYes = document.getElementById('closeYes');

const noBtn = document.getElementById('noBtn');
const fallingContainer = document.querySelector('.falling-container');
const bgMusic = document.getElementById('bgMusic');
let musicStarted = false;

function startMusic() {
  if (!musicStarted) {
    bgMusic.volume = 0.6;
    bgMusic.play().catch(() => {});
    musicStarted = true;
  }
}
document.addEventListener('click', startMusic);
document.addEventListener('touchstart', startMusic);

/* MESSAGE POPUP */
openMessage.addEventListener('click', () => {
  messageModal.style.display = 'flex';
});

closeMessage.addEventListener('click', () => {
  messageModal.style.display = 'none';
});

messageModal.addEventListener('click', (e) => {
  if (e.target === messageModal) {
    messageModal.style.display = 'none';
  }
});

/* YES POPUP */
yesBtn.addEventListener('click', () => {
  yesModal.style.display = 'flex';
});

closeYes.addEventListener('click', () => {
  yesModal.style.display = 'none';
});

yesModal.addEventListener('click', (e) => {
  if (e.target === yesModal) {
    yesModal.style.display = 'none';
  }
});

/* FUNNY NO BUTTON */
function moveNo() {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

noBtn.addEventListener('mouseover', moveNo);
noBtn.addEventListener('touchstart', moveNo);

/* FALLING WEDDING EMOJIS */
const icons = ['💍', '👰', '🤵', '💖', '🌹'];

function createFallingIcon() {
  const icon = document.createElement('div');
  icon.className = 'fall';
  icon.textContent = icons[Math.floor(Math.random() * icons.length)];
  icon.style.left = Math.random() * 100 + 'vw';
  icon.style.animationDuration = 4 + Math.random() * 3 + 's';
  fallingContainer.appendChild(icon);
  setTimeout(() => icon.remove(), 7000);
}

setInterval(createFallingIcon, 400);
