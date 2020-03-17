let seconds = 20;
let isWashingHands = false;
const washBTN = document.getElementById('washBTN');
const secondEl = document.getElementById('seconds');

function startTimer() {
  if (isWashingHands) {
    return;
  }

  isWashingHands = true;

  const time = setInterval(() => {
    seconds -= 1;
    if (seconds < 0) {
      clearInterval(time);
      document.getElementById('sound').play();
      seconds = 20;
    }
    secondEl.innerText = 'Seconds Left ' + seconds;
  }, 1000);
}

washBTN.addEventListener('click', startTimer);
