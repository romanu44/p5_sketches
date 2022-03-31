var posX, posY, mainCol, hue, size;

function setup() {
  createCanvas(windowWidth, windowHeight);
  setSize(width, height);
  background(255);
  colorMode(HSB);
  noStroke();
  posX = width / 2;
  posY = height / 2;
  hue = 20;
}

function draw() {
  mainCol = color(hue, 100, 100, 0.1);
  fill(mainCol);
  square(posX, posY, size);
  posX += random(-size, size);
  posY += random(-size, size);
  hue += random(-10, 10);
  if (posX < 0 || posX > width || posY < 0 || posY > height) {
    posX = random(width);
    posY = random(height);
    hue = random(20, 340);
  }
  if (frameCount % 3600 === 0) {
    background(255);
  }
}

function setSize(w, h) {
  if (w > h) {
    size = h / 20;
  } else {
    size = w / 20;
  }
}
