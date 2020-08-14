export class VectorSpace {
  constructor(canvas) {
    this.context = canvas.getContext("2d");
    this.ctx = this.context;
    this.width = canvas.width;
    this.height = canvas.height;
    this.makeGrid();
    this.drawVector(1, 1);
    this.drawVector(1, 2);
  }

  drawAt(x, y, color = "black") {
    const { context } = this;
    const unit = 100;
    context.fillStyle = color;
    context.fillRect(x * unit + 1, y * unit + 1, unit - 2, unit - 2);
  }

  drawVector(x, y) {
    const scale = 100;
    const { ctx, height, width } = this;
    const [xfinal, yfinal] = [x * scale, height - y * scale];
    ctx.beginPath();
    ctx.moveTo(0, height);
    ctx.lineTo(xfinal, yfinal);
    ctx.lineTo(xfinal - 10, yfinal);
    ctx.moveTo(xfinal, yfinal);
    ctx.lineTo(xfinal, yfinal + 10);
    ctx.strokeStyle = "black";
    ctx.stroke();
  }

  makeGrid() {
    const { context, width, height } = this;
    const unit = 20;
    context.strokeStyle = "lightgrey";
    for (let x = 0; x < width; ++x) {
      context.strokeRect(x * unit, 0, unit, height * unit);
    }
    for (let y = 0; y < height; ++y) {
      context.strokeRect(0, y * unit, width * unit, unit);
    }
  }

  clear() {
    const { context, unit, width, height } = this;
    context.clearRect(0, 0, unit * width, unit * height);
  }
}
