import Particle from "./Class/Particle.js";
import { randomNumBetween, colors, hypotenuse } from "./util.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');
const dpr = window.devicePixelRatio;
canvas.style.backgroundColor = 'rgb(0,0,0)';

const paricles = [];
const init = () => {
  const canvasWidth = window.innerWidth;
  const canvasHeight = window.innerHeight;
  const centerPointX = canvasWidth/2;
  const centerPointY = canvasHeight/2;
  canvas.style.width = `${canvasWidth}px`;
  canvas.style.height = `${canvasHeight}px`;

  canvas.width = canvasWidth * dpr;
  canvas.height = canvasHeight * dpr;
  ctx.scale(dpr, dpr);

  const num = 1000;
  for (let i = 0; i < num; i++) {
    const x = randomNumBetween(0, canvasWidth);
    const y = randomNumBetween(0, canvasHeight);
    const radius = randomNumBetween(0.01, 0.8);
    const color = colors[Number(Math.floor(randomNumBetween(1,6)))];

    let xLength = x-centerPointX;
    let yLength = y-centerPointY;
    const r = hypotenuse(xLength, yLength);

    const sinX = xLength/r;
    const sinY = yLength/r;

    const vx = Math.sin(sinX);
    const vy = Math.sin(sinY);
    
    const circle = new Particle(x, y, radius, vx, vy, 0.01, color);
    paricles.push(circle);
  }
}

const animate = () => {
  window.requestAnimationFrame(animate);
  paricles.forEach(particle => {
    particle.draw();
    particle.update();
  })
}

window.addEventListener('load', () => {
  init();
  animate();
})

window.addEventListener('resize', () => {
  init();
})