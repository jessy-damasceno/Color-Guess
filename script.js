const balls = document.querySelectorAll('.ball');
const ballContainer = document.querySelector('.ball-container');
const answer = document.querySelector('#answer');
const colorText = document.getElementById('rgb-color');
const resetBtn = document.getElementById('reset-game');
const placar = document.getElementById('score');
const title = document.getElementById('title');
let acertos = 0;

function randomColors(qtd) {
  const paletaDeCores = [];
  for (let i = 0; i < qtd; i += 1) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    paletaDeCores.push(`rgb(${r}, ${g}, ${b})`); // MODELO: rgb(68, 98, 105)
  }
  for (let j = 0; j < balls.length; j += 1) {
    balls[j].style.backgroundColor = paletaDeCores[j];
  }
  colorText.innerHTML = paletaDeCores[Math.floor(Math.random() * 6)];
}

function checkColor(evnt) {
  const e = evnt.target;

  if (e.classList.contains('ball-container')) {
    return false;
  }
  if (e.style.backgroundColor === colorText.innerText) {
    answer.innerText = 'Acertou!';
    acertos += 3;
    placar.innerText = `Placar: ${acertos}`;
  } else {
    answer.innerText = 'Errou! Tente novamente!';
  }
}

window.onload = function initialize() {
  randomColors(balls.length);
};

function corLetra() {
  const array = title.innerText.split('');
  const cores = [];

  for (let i = 0; i < array.length; i += 1) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    cores.push(`rgb(${r}, ${g}, ${b})`);
  }

  title.innerHTML = '';
  for (let i = 0; i < array.length; i += 1) {
    const span = document.createElement('span');
    span.innerText = array[i];
    span.style.color = cores[i];
    span.classList.add('fonte');
    title.appendChild(span);
  }
}
corLetra();

function resetAll() {
  answer.innerText = 'Escolha uma cor';
  randomColors(6);
  corLetra();
}

ballContainer.addEventListener('click', checkColor);
resetBtn.addEventListener('click', resetAll);
