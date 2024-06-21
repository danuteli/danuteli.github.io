let x0, y0;
let startX, startY, endX, endY;
let x1, y1, x2, y2;
let diceResult;
let downDirection, rightDirection;

let border = 50;
let numSquares = 3;
let squareSize = 200;
let lineDist = squareSize / 4;

let dice = [1, 2, 3, 4, 5, 6];

let sqareStartingCoords = {
  0: [coord(0), coord(0)],
  1: [coord(1), coord(0)],
  2: [coord(2), coord(0)],
  3: [coord(2), coord(1)],
  4: [coord(1), coord(1)],
  5: [coord(0), coord(1)],
  6: [coord(0), coord(2)],
  7: [coord(1), coord(2)],
  8: [coord(2), coord(2)]
}

function coord (numSquares) {
  return border + (numSquares * squareSize);
}

function setup() {
  let cnv = createCanvas(700, 700);
  frameRate(1);
  cnv.position(0, 0, 'relative');
  cnv.parent('alg');
}

function draw() {

  background('white');
  strokeWeight(2);
  stroke('rgba(206, 121, 101, 1)');
  circle(50, 50, 25);
  circle(650, 650, 25);
  

  for (let n = 0; n < numSquares * numSquares; n++) {
    let i = Math.floor(n / numSquares); // row index
    let j = n % numSquares; // column index

    x0 = (sqareStartingCoords[n])[0];
    y0 = (sqareStartingCoords[n])[1];

    // direction of the diagonal 

    if ((i + j) % 2 == 0) {
      startX = x0;
      startY = y0;
      endX = x0 + squareSize;
      endY = y0 + squareSize;
      if ( n == 4) {
        startX = endX;
        startY = endY;
        endX = x0;
        endY = y0;
      }
    } else if (n == 1 || n == 7) {
      startX = x0;
      startY = y0 + squareSize;
      endX = x0 + squareSize;
      endY = y0;
    } else {
      startX = x0 + squareSize;
      startY = y0;
      endX = x0;
      endY = y0 + squareSize;
    }

    // fill each of the smaller squares with random lines based on dice roll's result
    x1 = startX;
    y1 = startY;

    while (true) {
      diceResult = random(dice);
      downDirection = startY < endY; 
      rightDirection = startX < endX;

      switch (diceResult) {
        case 1:
          x2 = x1;
          y2 = y1 + lineDist;
          if (!downDirection || y2 > (y0 + squareSize)) {
            y2 = y1 - lineDist;
            if (!downDirection && y2 < y0) y2 = y1 + lineDist;
          };
          break;
        case 2:
          x2 = x1 + lineDist;
          y2 = y1;
          if (!rightDirection || x2 > (x0 + squareSize)) {
            x2 = x1 - lineDist;
            if (!rightDirection && x2 < startX) x2 = x1 + lineDist;
          };
          break;
        case 3:
          x2 = x1 - lineDist;
          y2 = y1 + lineDist;
          if (!downDirection || x2 < x0 || y2 > (y0 + squareSize)) {
            x2 = x1 + lineDist;
            y2 = y1 - lineDist;
            if ((!downDirection && x2 > (x0 + squareSize)) || (!downDirection && y2 < y0)) {
              x2 = x1 - lineDist;
              y2 = y1 + lineDist;
            }
          }
          break;
        case 4:
          x2 = x1 + lineDist;
          y2 = y1 + lineDist;
          if (!downDirection || x2 > (x0 + squareSize) || y2 > (y0 + squareSize)) {
            x2 = x1 - lineDist;
            y2 = y1 - lineDist;
            if ((!downDirection && x2 < x0) || (!downDirection && y2 < y0)) {
              x2 = x1 + lineDist;
              y2 = y1 + lineDist;
            }
          }
          break;
        case 5:
          x2 = x1 + (2 * lineDist);
          y2 = y1;
          if (!rightDirection || x2 > (x0 + squareSize)) {
            x2 = x1 - (2 * lineDist);
            if (!rightDirection && x2 < x0) x2 = x1 + (2 * lineDist);
          };
          break;
        case 6:
          x2 = x1;
          y2 = y1 + (2 * lineDist);
          if (!downDirection || y2 > (y0 + squareSize)) {
            y2 = y1 - (2 * lineDist);
            if (!downDirection && y2 < y0) y2 = y1 + (2 * lineDist);
          }
          break;
      }
      
      if ((x2 <= (x0 + squareSize) && y2 <= (y0 + squareSize)) && (x2 >= x0 && y2 >= y0)) {
        line(x1, y1, x2, y2);
        x1 = x2;
        y1 = y2;
      }

      // break the loop if the endpoint is reached
      if (x2 === endX && y2 === endY) {
        break;
      }
    }
  }
}





