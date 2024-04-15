let userHasClicked = false;

let riverSound;
let metalSound;



function preload() {
  riverSound = loadSound('assets/river.wav');
  metalSound = loadSound('assets/metal.wav');
}

function setup() {

  createCanvas(windowWidth, windowHeight);
  textSize(50);
  textAlign(CENTER);

  riverSound.setVolume(0);
  metalSound.setVolume(0.5);
 
}

function draw() {

  let riverColor = color('blue');
  let metalColor = color('red');
  background('hotpink');

  if (userHasClicked == false) {
    text (
    'click to continue',
    width/2,
    height/2
    )
  } else {
    if (riverSound.isPlaying() == false) {
      riverSound.play();
    }

    if (metalSound.isPlaying() == false) {
      metalSound.play();
    }

    let targetVolumeRiver = map(
      mouseX,
      0,
      width,
      0,
      1
    )

    let targetVolumeMetal = map(
      mouseX,
      0,
      width,
      1,
      0
    )

    riverSound.setVolume(targetVolumeRiver);
    metalSound.setVolume(targetVolumeMetal);
    
    let targetColor = lerpColor(metalColor, riverColor, targetVolumeRiver);
    background(targetColor);

  }

  

}

function mouseClicked() {
  userHasClicked = true;
}
