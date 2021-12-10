function draw() {
  const date = new Date();
  const hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milliseconds = date.getMilliseconds();

  const hourAngle = hours * 30 + (minutes * 6 / 12);
  const minuteAngle = minutes * 6 + (seconds * 6 / 60);
  const secondAngle = seconds * 6 + (milliseconds * 0.36 / 1000);

  function setAngle(className, angle) {
    document.querySelector(className).style.transform = `rotate(${angle}deg)`;
  }

  setAngle(".hand.hour", hourAngle);
  setAngle(".hand.minute", minuteAngle);
  setAngle(".hand.second", secondAngle);
}

draw();

setInterval(() => {
  draw();
}, 1000);