
const secondHands = document.querySelector(".seconds-hand");
const minutesHands = document.querySelector('.minutes-hand');
const hoursHands = document.querySelector(".hour-hand");


function setDate(){
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) *360) + 90;
  secondHands.style.transform = `rotate(${secondsDegrees}deg)`;
    // console.log(secondHands);

   const minutes = now.getMinutes();
  const minutesDegrees = ((minutes /60) *360) + 90;
  minutesHands.style.transform = `rotate(${minutesDegrees}deg)`;

   const hours = now.getHours();
  const hoursDegrees = ((hours /12) *360) + 90;
  hoursHands.style.transform = `rotate(${hoursDegrees}deg)`;
//   console.log(seconds);
}
setInterval (setDate,1000);