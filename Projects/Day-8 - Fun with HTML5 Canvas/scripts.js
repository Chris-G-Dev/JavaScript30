const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 50;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  if(!isDrawing) return; // stop the fn from running when they are moused down
  console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  // Set lastX/lastY to the last offsets so the line isn't always starting from 0, 0
  [lastX, lastY] = [e.offsetX, e.offsetY]
  // The above line is the equivalent of:
  // lastX = e.offsetX;
  // lastY = e.offsetY;
  hue++;
  if(hue >= 360) {
    hue = 0;
  }

  if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }

  direction === true ? ctx.lineWidth++ : ctx.lineWidth--;
}

// Sets isDrawing to true/false depending on the mouse action taken
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);