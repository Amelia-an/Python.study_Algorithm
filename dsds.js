const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

canvas.width = 800;

canvas.height = 800;

ctx.lineWidth = 2;

let isPaining = false;

function onMove(event) {
  if (isPaining) {
    ctx.lineTo(event.offsetX, event.offsetY);

    ctx.stroke();

    return;
  }

  ctx.moveTo(event.offsetX, event.offsetY);
}

function onMouseDown() {
  isPaining = true;
}

function onMouseUp() {
  isPaining = false;
}

canvas.addEventListener("mousemove", onMove);

canvas.addEventListener("mousedown", onMouseDown);

canvas.addEventListener("mouseup", onMouseUp);
