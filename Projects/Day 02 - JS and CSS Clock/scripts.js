const hands = document.querySelectorAll('.hands');
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds/60) * 360) + 90;
  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes/60) * 360) + 90;
  const hour = now.getHours();
  const hourDegrees = ((hour/12) * 360) + 90;
  
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  if (secondsDegrees === 90) {
    secondHand.style.transition = 'none';
  } else {
    secondHand.style.transition = '';
  }
}

setInterval(setDate, 1000);