let img;
let circleX = 100;
let circleY = 100;

// Load the image and create a p5.Image object.
function preload() {
  img = loadImage('./image.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    imageMode(CENTER);
  }

  function draw() {
    background(0);

    image(img, mouseX, mouseY, 400, 400);

    noFill();
    circle(circleX, circleY, 60);

    let d = dist(mouseX, mouseY, circleX, circleY);

    if (d < 30) {
        circleX = random(0, width)
        circleY = random(0, height)
    }

  }