var blur = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  blendMode(NORMAL);
  background(0);
  noFill();
  blendMode(HARD_LIGHT);
  drawRect(10, color(255), 100);
  drawRect(width / 3, color(0, 0, 255), 125);
  drawRect(width / 2, color(235, 59, 139), 150);
  drawRect(width / 4, color(245, 61, 237), 175);
  blur++;
}

function drawRect(x, clr, d) {
  for (let i = 40; i < width; i += 100) {
    stroke(clr);
    strokeWeight(i / 60);
    rect(0, 0 - x, i + (blur % d), i + (blur % d), 0, 100);
  }
}
