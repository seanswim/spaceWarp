export default class Particle {
  constructor(x, y, radius, vx, vy, acc, color) {
    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.vx = vx;
    this.vy = vy;
    this.acc = acc;
    this.color = color;
  }
  
  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI/180 * 360);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.closePath();
  }

  update() {
    this.acc = this.acc * 1.004;
    this.y += this.vy * this.acc;
    this.x += this.vx * this.acc;
  }
}