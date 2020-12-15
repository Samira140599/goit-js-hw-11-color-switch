'use strict'
const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
  const startButton = document.getElementById('start');
  const stopButton = document.getElementById('stop');
  
  startButton.addEventListener("click", () => {
    timerId = setInterval(() => {
        document.body.style.backgroundColor = colors[randomIntegerFromInterval(0,5)];
    }, 1000);
  });

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);}

 