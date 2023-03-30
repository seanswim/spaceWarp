import Particle from "./Class/Particle.js";
import { randomNumBetween, colors, hypotenuse } from "./util.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');
const dpr = window.devicePixelRatio;
canvas.style.backgroundColor = 'rgb(0,0,0)';
const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
const centerPointX = canvasWidth/2;
const centerPointY = canvasHeight/2;

const generateStar = (acc = 0.01) => {
  const x = randomNumBetween(0, canvasWidth);
  const y = randomNumBetween(0, canvasHeight);
  const color = colors[Number(Math.floor(randomNumBetween(1,6)))];

  let xLength = x-centerPointX;
  let yLength = y-centerPointY;
  const r = hypotenuse(xLength, yLength);

  const sinX = xLength/r;
  const sinY = yLength/r;

  const vx = Math.sin(sinX);
  const vy = Math.sin(sinY);

  const length = randomNumBetween(1, 1000);
  const size = randomNumBetween(1, 8);

  const star = new Particle(x, y, vx, vy, acc, color, size, length);
  paricles.push(star);
}

const paricles = [];
const init = () => {
  
  canvas.style.width = `${canvasWidth}px`;
  canvas.style.height = `${canvasHeight}px`;

  canvas.width = canvasWidth * dpr;
  canvas.height = canvasHeight * dpr;
  ctx.scale(dpr, dpr);

  const num = 1200;
  for (let i = 0; i < num; i++) {
    generateStar();
  }
}

const animate = () => {
  window.requestAnimationFrame(animate);

  ctx.fillStyle = 'rgb(0,0,0)';
  ctx.fillRect(0, 0, canvasWidth, canvasHeight)

  paricles.forEach((particle, index) => {
    particle.update();
    particle.draw();
    if (particle.x < -particle.size || particle.x > canvasWidth + particle.size || particle.y < -particle.size || particle.y > canvasHeight + particle.size) {
      generateStar(particle.acc);
      paricles.splice(index, 1);
    }
  })
}

window.addEventListener('load', () => {
  init();
  animate();
})

window.addEventListener('resize', () => {
  init();
})