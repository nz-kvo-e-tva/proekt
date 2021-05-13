let ballr = 40;
let ball;
let length = 300;
let angle;
let buttonLengthUp;
let buttonLengthDown;
let buttong1;
let buttong2;
let buttong3;
let pauseButton;
let startButton;
let gravity = 9.81;
let angleMotion = 0;
let lengthM = 0.5;
let Period = 0;

function setup() {
  createCanvas(800, 700);
  ball = createVector();
  angle = 315;
  buttonLengthUp = createButton("Length + 0.1m");
  buttonLengthUp.mousePressed(lengthUp);
  buttonLengthDown = createButton("Length - 0.1m");
  buttonLengthDown.mousePressed(lengthDown);
  buttong1 = createButton("9.51 m/s^2");
  buttong1.mousePressed(g1);
  buttong2 = createButton("9.81 m/s^2");
  buttong2.mousePressed(g2);
  buttong3 = createButton("10.11 m/s^2");
  buttong3.mousePressed(g3);
  pauseButton = createButton("Pause Pendulum");
  pauseButton.mousePressed(pausePendulum);
  startButton = createButton("Start Pendulum");
  startButton.mousePressed(startPendulum);
  createP(
    "Base gravity is 9.81m/s^2, base length is 0.5m. Amplitude is PI/4 radians"
  );
  Period = 2 * PI * sqrt(lengthM / gravity);
  angleMotion = PI / Period;
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(3);
  angleMode(DEGREES);
  // frameRate(1);

  ball.x = length * sin(angle) + 400;
  ball.y = length * cos(angle);

  line(400, 0, ball.x, ball.y);
  ellipse(ball.x, ball.y, ballr);

  angle = angle + angleMotion;
  changeDir();
  console.log(angle);
}

function g1() {
  gravity = 9.51;
}

function g2() {
  gravity = 9.81;
}

function g3() {
  gravity = 10.11;
}

function lengthUp() {
  if (length <= 540 && lengthM <= 0.9) {
    length = length + 60;
    lengthM = lengthM + 0.1;
  } else {
    length = 600;
    lengthM = 1;
  }
}

function lengthDown() {
  if (length >= 120 && lengthM >= 0.2) {
    length = length - 60;
    lengthM = lengthM - 0.1;
  } else {
    length = 60;
    lengthM = 0.1;
  }
}

function changeDir() {
  if (angle > 405) {
    angleMotion = -PI / (2 * Period);
  } else if (angle < 315) {
    angleMotion = PI / (2 * Period);
  }
}

function pausePendulum() {
  angleMotion = 0;
}

function startPendulum() {
  angleMotion = PI / (2 * Period);
}
