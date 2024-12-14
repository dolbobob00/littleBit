const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const button = document.querySelector('#start');
let lastHole;
let timeUp = false;
let score = 0;
const hitSound = new Audio('assets/new_year/bonk.mp3');

// Массив с изображениями моли
const moleImages = [
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1159990/mole.svg',
  'assets/new_year/bird.png',
  'assets/new_year/santa/ded.jpg',
];

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];

  if (hole === lastHole) {
    console.log('Same one');
    return randomHole(holes);
  }

  lastHole = hole;
  return hole;
}

// Выбор случайного изображения
function randomMoleImage() {
  const idx = Math.floor(Math.random() * moleImages.length);
  return moleImages[idx];
}

function peep() {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  const mole = hole.querySelector('.mole');

  // Задать случайное изображение
  mole.style.backgroundImage = `url('${randomMoleImage()}')`;

  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) peep();
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  button.style.visibility = 'hidden';
  peep();
  setTimeout(() => {
    timeUp = true;
    button.innerHTML = 'Ещё раз?';
    button.style.visibility = 'visible';
  }, 30000);
}

function bonk(e) {
  if (!e.isTrusted) return; // Защита от автощелчков
  hitSound.currentTime = 0; // Сбросить воспроизведение для быстрого повторения
  hitSound.play();
  score++;
  this.classList.remove('up');
  scoreBoard.textContent = score;

}

moles.forEach(mole => mole.addEventListener('click', bonk));
