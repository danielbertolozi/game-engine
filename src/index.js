function getCounter() {
  let i = 0;
  return () => {
    return i++;
  }
}

const counter = getCounter();
let text;
function draw() {
  return new Promise((resolve, reject) => {
    if (!text) {
      text = document.createElement("span");
      const content = document.createTextNode(counter());
      text.appendChild(content)
      document.getElementById("main").appendChild(text);
    } else {
      text.childNodes[0].textContent = counter();
    }
    resolve();
  });
}

function drawLoop() {
  return draw().then(() => {
    setTimeout(drawLoop, timeBetweenFramesInMillis);;
  })
}

const timeBetweenFrames = 0.0166666667;
const timeBetweenFramesInMillis = 16.6666667;
window.onload = () => {
  drawLoop();
};
