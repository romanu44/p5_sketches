function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(135, 145, 158);
  rotateX(frameCount * 0.01);
  rotateZ(frameCount * 0.001);
  stroke(255);
  fill(60, 255, 9);
  cone(200, 200, 8);
  translate(0, 200);
  fill(0);
  cone(200, -200, 16);
}
