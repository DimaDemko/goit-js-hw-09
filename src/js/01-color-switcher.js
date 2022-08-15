const start = document.querySelector('[data-start]');
const stopp = document.querySelector('[data-stop]');
const body = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function bgcolour() {
  body.style.backgroundColor = getRandomHexColor();
}

start.addEventListener('click', () => {
  timerStartId = setInterval(bgcolour, 1000);
  start.setAttribute('disabled', 'disable');
  stopp.removeAttribute('disabled');
});

stopp.addEventListener('click', () => {
  clearInterval(timerStartId);
  start.removeAttribute('disabled');
  stopp.setAttribute('disabled', 'disable');
});

function isIsogram(str) {
  const lowerCaseString = str.toLowerCase();
  let string = '';
  for (i = str.length - 1; i >= 0; i -= 1) {
    string += str[i];
  }
  console.log(string);
}
console.log(isIsogram('wordisbig'));
