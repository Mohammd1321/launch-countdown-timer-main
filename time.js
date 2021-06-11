'use strict';

const counter = document.querySelectorAll('.content');

let counterOver = 777351000;


const countdown = () => {
  let seconds = 1000;
  let minutes = seconds * 60;
  let hours = minutes * 60;
  let days = hours * 24;
  let daysOver = Math.floor(counterOver / days);
  let hoursOver = Math.floor((counterOver % days) / hours);
  let minutesOver = Math.floor((counterOver % hours) / minutes);
  let secondsOver = Math.floor((counterOver % minutes) / seconds);
  let arr = [daysOver,hoursOver,minutesOver,secondsOver];

  function over10(number) {
    if(number < 10) {
      number = '0' + number;
    }
    return number;
  }

  counter.forEach((count,index) => {
    count.textContent = over10(arr[index]);
  })
  counterOver = counterOver - 1000;
}

setInterval(countdown,1000);