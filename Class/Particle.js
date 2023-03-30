export default class Particle {
  constructor(x, y, vx, vy, acc, color, size, maxLength) {
    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.size = 1;
    this.maxLength = maxLength;
    this.acc = acc;
    this.color = color;
    this.length = 0;

    this.width = this.size;
    this.height = this.size + this.length;
  }
  
  draw() {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.translate(this.x + this.width/2, this.y + this.height/2);
    this.ctx.rotate(-Math.atan2(this.vx, this.vy));
    this.ctx.roundRect(-this.width/2, -this.height/2, this.width, this.height, 60);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.restore();
  }

  update() {
    if (this.acc < 30) {
      this.acc = this.acc * 1.004;
    }
    if (this.height < this.maxLength) {
      this.size = this.size + (0.1 * this.acc);
      this.height = this.height + (0.2 * this.acc);
    }
    if (this.width < this.maxLength / 3) {
      this.width = this.width + (0.02 * this.acc);
    }
    this.y += this.vy * this.acc;
    this.x += this.vx * this.acc;
  }
}