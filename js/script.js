let x = 0;

let dx = 5;

let y = 0;

let dy = 3;

let count = 0;

let a = 1;

let y1 = 0;
let y2 = 0;
platform_speed = 0;

function setup() {
  createCanvas(900, 500);
}

function draw() {
  background("#2E2E2E");

  //ball
  fill("#00FF40");
  ellipse(x, y, 40, 40);

  //left platform
  rect(20, y1, 30, 150);

  //right platform
  rect(width - 50, y2, 30, 150);

  if (x > width) {
    dx = -dx;
  }

  if (x < 0) {
    dx = -dx;
  }

  if (y < 0 || y > height) {
    dy = -dy;
  }

  fill("#00FF40");
  textSize(100);
  text(count, 400, 175);

  if (y > height + 50) {
    dy = 0;
    dx = 0;
    fill("#00FF40");
    textSize(50);
    text("GAME OVER!", 100, 275);
  }

  if (count > 4 && count % 5 == 0 && y < height + 50) {
    textSize(20);
    fill("#0000FF");
    text("Picking up the pace...", 150, 350);
  }

  y = y + dy;
  x = x + dx;
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    y1 = y1 - platform_speed;
  } else if (keyCode == DOWN_ARROW) {
    y1 = y1 + platform_speed;
  }
}
