/*global
  createCanvas, colorMode, HSB, background, fill, rect, color, width, height
  noFill, strokeWeight, random, text, mouseX, mouseY, mouseIsPressed, frameRate
  keyCode, UP_ARROW, RIGHT_ARROW, LEFT_ARROW, DOWN_ARROW, keyIsDown,
  lineList, jList, lList, squareList, sList, tList, zList, 
  windowWidth, windowHeight, resizeCanvas, Piece
*/

//NOTE : FIX ARROWS / TRANSLATION

let myBox;
let myPiece;
let currentPiece;

var timer = 1000;
var boardHeight, boardWidth;
var boxDimension;

var gameStarted = false;

var numberArray = [1, 2, 3, 4, 5, 6, 7];
var pieceArray = numberArray;
let rotationList;
var fallVelocity;
var linesCleared = 0;

var piecesOnBoard = [];
var boxesOnBoard = [];
var nextPieceArray = [];
var boxesXYPos = [];

function setup() {
  createCanvas(windowWidth - 50, windowHeight - 50);
  boardHeight = Math.round(windowHeight * (2 / 3));
  boardWidth = boardHeight / 2;
  boxDimension = boardWidth / 10;
  colorMode(HSB, 360, 100, 100);
  frameRate(5);

  currentPiece = newPiece(Math.floor(random(7)) + 1);
  piecesOnBoard.push(currentPiece);
}

function windowResized() {
  resizeCanvas(windowWidth - 50, windowWidth - 50);
}

function draw() {
  background("grey");
  drawBoard();
  userKeys();

  if (gameStarted == false) {
    startButton();
  } else {
    if (currentPiece.pieceIsDead === true) {
      for (var i = 0; i < currentPiece.boxes.length; i++) {
        boxesOnBoard.push(currentPiece.boxes[i]);
        // console.log(boxesOnBoard.length);
      }

      // console.log(nextPieceArray);
      currentPiece = newPiece(Math.floor(random(7)) + 1);
      // for (var i = 0; i < currentPiece.boxes.length; i++) {
      //   boxesOnBoard.push(currentPiece.boxes[i]);
      //   console.log(boxesOnBoard.length);
      // }
      piecesOnBoard.push(currentPiece);
      // console.log(piecesOnBoard);
      nextPieceArray.shift();
    }
    currentPiece.moveDown();
    currentPiece.show();

    for (var i = 0; i < piecesOnBoard.length; i++) {
      piecesOnBoard[i].show();
    }
  }
}

// function keyPressed() {
//   if (keyCode === UP_ARROW) {
//     // myPiece.rotate();
//     currentPiece.rotate();
//   }
//   if (keyCode === RIGHT_ARROW) {
//     // myPiece.moveRight();
//     currentPiece.moveRight();
//   }
//   if (keyCode === LEFT_ARROW) {
//     // myPiece.moveLeft();
//     currentPiece.moveLeft();
//   }
// }

function userKeys() {
  if (keyIsDown(UP_ARROW)) {
    // myPiece.rotate();
    currentPiece.rotate();
  }
  if (keyIsDown(RIGHT_ARROW)) {
    // myPiece.moveRight();
    currentPiece.moveRight();
  }
  if (keyIsDown(LEFT_ARROW)) {
    // myPiece.moveLeft();
    currentPiece.moveLeft();
  }
}

function startButton() {
  fill(0, 0, 100);
  rect(windowWidth / 2 - boardWidth / 6, windowHeight - 80, boardWidth / 3, 20);
  fill(0, 0, 0);
  text("Start", windowWidth / 2 - 13, windowHeight - 65);

  if (
    mouseX > windowWidth / 2 - boardWidth / 6 &&
    mouseX < windowWidth / 2 - boardWidth / 6 + boardWidth / 3 &&
    mouseY > windowHeight - 80 &&
    mouseY < windowHeight - 60 &&
    mouseIsPressed
  ) {
    gameStarted = true;
    console.log("game started");
    background("grey");
    drawBoard();
  }
}

function drawBoard() {
  fill(0, 0, 90);

  rect(
    windowWidth / 2 - boardWidth / 2,
    (windowHeight - boardHeight) / 2,
    boardWidth,
    boardHeight
  );

  var gridX = windowWidth / 2 - boardWidth / 2,
    gridY = (windowHeight - boardHeight) / 2;

  for (var i = 0; i < 200; i++) {
    noFill();
    strokeWeight(0.5);
    rect(gridX, gridY, boardWidth / 10, boardWidth / 10);

    gridX += boardWidth / 10;
    if ((i + 1) % 10 == 0 && i != 0) {
      gridX = windowWidth / 2 - boardWidth / 2;
      gridY += boardWidth / 10;
    }
  }
}

function newPiece(pieceID) {
  switch (pieceID) {
    case 1:
      rotationList = lineList;
      return new Piece(
        rotationList,
        windowWidth / 2 - boxDimension * 2,
        (windowHeight - boardHeight) / 2,
        { h: 180, s: 100, b: 100 }
      );
    case 2:
      rotationList = jList;
      return new Piece(
        rotationList,
        windowWidth / 2 - boxDimension * 2,
        (windowHeight - boardHeight) / 2,
        { h: 240, s: 100, b: 100 }
      );
    case 3:
      rotationList = lList;
      return new Piece(
        rotationList,
        windowWidth / 2 - boxDimension * 2,
        (windowHeight - boardHeight) / 2,
        { h: 30, s: 100, b: 100 }
      );
    case 4:
      rotationList = squareList;
      return new Piece(
        rotationList,
        windowWidth / 2 - boxDimension * 2,
        (windowHeight - boardHeight) / 2,
        { h: 60, s: 100, b: 100 }
      );
    case 5:
      rotationList = sList;
      return new Piece(
        rotationList,
        windowWidth / 2 - boxDimension * 2,
        (windowHeight - boardHeight) / 2,
        { h: 120, s: 100, b: 100 }
      );
    case 6:
      rotationList = tList;
      return new Piece(
        rotationList,
        windowWidth / 2 - boxDimension * 2,
        (windowHeight - boardHeight) / 2,
        { h: 270, s: 100, b: 100 }
      );
    case 7:
      rotationList = zList;
      return new Piece(
        rotationList,
        windowWidth / 2 - boxDimension * 2,
        (windowHeight - boardHeight) / 2,
        { h: 0, s: 100, b: 100 }
      );
  }
}

function displayScore() {}

function checkBoxesOnBoard() {
  for (var i = 0; i < boxesOnBoard.length; i++) {
    var XY = {
      x: "",
      y: ""
    };

    XY.x = boxesOnBoard[i].x;
    XY.y = boxesOnBoard[i].y;
    boxesXYPos.push(XY);
  }
  return boxesXYPos;
}

class Piece {
  constructor(originalShapes = [], x = 0, y = 0, color = { h: 0, s: 0, b: 0 }) {
    this.originalShapes = originalShapes;
    this.x = x;
    this.y = y;
    this.color = color;
    this.rotation = 0;
    this.boxes = this.fillPiece();
    this.pieceIsDead = false;
    // console.log(this.x, this.y);
  }

  //Array.from creates new arrays from whatever is inside the ()
  fillPiece() {
    let boxes = [];

    let pieceLength = this.originalShapes[this.rotation].length;
    // length is the number of rows in the array e.g. shape J only has 3

    // i is the line in the code (the rows) in shapeArrays
    // j is the element inside the row of the shape arrays [j, j, j, j]
    // console.log(this.x);

    for (let i = 0; i < pieceLength; i++) {
      for (let j = 0; j < pieceLength; j++) {
        if (this.originalShapes[this.rotation][i][j] === 1) {
          let newBox = new Box(
            this.x + j * boxDimension,
            this.y + i * boxDimension,
            boxDimension,
            boxDimension,
            this.color
          );
          boxes.push(newBox);
        }
      }
    }
    return boxes;
  }

  rotate() {
    this.rotation++;

    if (this.rotation >= rotationList.length) {
      this.rotation = 0;
    }

    this.boxes = this.fillPiece();
  }

  show() {
    // this.boxes is an array

    // [a, b, c]
    //  0  1  2

    // this.boxes[0].show()

    // i is an element in the array, if i starts at 0 and while i is less than the array length, i++
    // since this.boxes is an array of all the boxes

    for (let i = 0; i < this.boxes.length; i++) {
      this.boxes[i].show();
      // console.log("currentPiece.show() was called");
    }
  }

  moveDown() {
    // keep track of where the piece is so when we rotate it we can keep it in the right spot
    this.y += boxDimension;
    for (let i = 0; i < this.boxes.length; i++) {
      if (this.boxes[i].y <= (windowHeight - boardHeight) / 2 + boardHeight) {
        this.boxes[i].y += boxDimension;
      }
      if (
        this.boxes[i].y + boxDimension >=
        (windowHeight - boardHeight) / 2 + boardHeight
        // y value that it spawns at
      ) {
        this.pieceIsDead = true;
      }

      checkBoxesOnBoard();
      for (var j = 0; j < boxesXYPos.length; j++) {
        if (
          this.boxes[i].y + boxDimension >= boxesXYPos[j].y &&
          this.boxes[i].x === boxesXYPos[j].x
        ) {
          this.pieceIsDead = true;
        }
      }
    }
  }

  //   moveLeft() {
  //     for (let i = 0; i < this.boxes.length; i++) {
  //       this.boxes[i].x -= boxDimension;
  //     }
  //     this.x -= boxDimension;
  //   }
  // }

  moveLeft() {
    for (let i = 0; i < this.boxes.length; i++) {
      if (this.boxes[i].x >= windowWidth / 2 - boxDimension * 4) {
        this.boxes[i].x -= boxDimension;
      }
    }
    this.x -= boxDimension;
  }

  // moveRight() {
  //   for (let i = 0; i < this.boxes.length; i++) {
  //     this.boxes[i].x += boxDimension;
  //   }
  //   this.x += boxDimension;
  // }

  moveRight() {
    for (let i = 0; i < this.boxes.length; i++) {
      if (
        this.boxes[i].x <=
        windowWidth / 2 + boardWidth / 2 + 2 * boxDimension
      ) {
        this.boxes[i].x += boxDimension;
      }
    }
    this.x += boxDimension;
  }

  // rect(
  //   windowWidth / 2 - boardWidth / 2,
  //   (windowHeight - boardHeight) / 2,
  //   boardWidth,
  //   boardHeight
  // );
}

class Box {
  constructor(x, y, boxWidth, boxHeight, color) {
    // console.log(x);
    this.x = x;
    this.y = y;
    this.boxWidth = boxWidth;
    this.boxHeight = boxHeight;
    this.color = color;
  }

  show() {
    // console.log(this.x, this.y)
    let actualColor = this.color;
    fill(actualColor.h, actualColor.s, actualColor.b);
    rect(this.x, this.y, this.boxWidth, this.boxHeight);
  }
}
