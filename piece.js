// /*global
//   windowWidth, windowHeight, boardWidth, boardHeight, rect, fill,
//   boxDimension, rotationList
// */

// //const boxDimension = 20;

// class Piece {
//   constructor(originalShapes = [], x = 0, y = 0, color = { r: 0, g: 0, b: 0 }) {
//     this.originalShapes = originalShapes;
//     this.color = color;
//     this.x = x;
//     this.y = y;
//     this.rotation = 0;
//     this.boxes = this.fillPiece2();
//   }

//   // fillPiece(pieceLength) {
//   //   return Array.from(new Array(pieceLength), (row, i) =>
//   //     Array.from(new Array(pieceLength), (col, j) =>
//   //       this.originalShape[i][j] === 1
//   //         ? new Box(
//   //             this.x + j * boxDimension,
//   //             this.y + i * boxDimension,
//   //             boxDimension,
//   //             boxDimension,
//   //             this.color
//   //           )
//   //         : null
//   //     )
//   //   );
//   // }

//   //Array.from creates new arrays from whatever is inside the ()

//   fillPiece2() {
//     let boxes = [];

//     let pieceLength = this.originalShapes[this.rotation].length;
//     // length is the number of rows in the array e.g. shape J only has 3

//     // i is the line in the code (the rows) in shapeArrays
//     // j is the element inside the row of the shape arrays [j, j, j, j]

//     for (let i = 0; i < pieceLength; i++) {
//       for (let j = 0; j < pieceLength; j++) {
//         if (this.originalShapes[this.rotation][i][j] === 1) {
//           boxes.push(new Box(
//             this.x + j * boxDimension,
//             this.y + i * boxDimension,
//             boxDimension,
//             boxDimension,
//             this.color
//           ));
//           boxes.push(new Box());
//         }
//       }
//     }
//     return boxes;
//   }

//   rotate() {
//     this.rotation++;

//     if (this.rotation >= rotationList.length) {
//       this.rotation = 0;
//     }

//     this.boxes = this.fillPiece2();
//   }

//   // show() {
//   //   this.boxes.forEach(x =>
//   //     x.filter(j => j != null).forEach(box => box.show())
//   //   );
//   // }

//   show2() {
//     // this.boxes is an array

//     // [a, b, c]
//     //  0  1  2

//     // this.boxes[0].show()

//     // i is an element in the array, if i starts at 0 and while i is less than the array length, i++
//     // since this.boxes is an array of all the boxes

//     for (let i = 0; i < this.boxes.length; i++) {
//       this.boxes[i].show();
//       console.log('show2 is called');
//     }
//   }

//   // moveDown() {
//   //   this.boxes.forEach(x =>
//   //     x.filter(j => j != null).forEach(box => (box.y += 20))
//   //   );
//   // }

//   moveDown2() {
//     for (let i = 0; i < this.boxes.length; i++) {
//       this.boxes[i].y += boardWidth / 10;
//     }
//     // this.y += 20;
//     // will keep track of where the piece is so when we rotate it we can keep it in the right spot
//   }
// }

// class Box {
//   constructor(
//     x = windowWidth / 2 - boardWidth / 2,
//     y = (windowHeight - boardHeight) / 2,
//     // boxWidth = boardWidth / 10,
//     // boxHeight = boxWidth,
//     boxWidth = boardWidth / 10,
//     boxHeight = boxWidth,
//     color = { r: 0, g: 0, b: 0 }
//   ) {
//     this.x = x;
//     this.y = y;
//     this.boxWidth = boxWidth;
//     this.boxHeight = boxHeight;
//     this.color = color;
//   }

//   show() {
//     let actualColor = this.color;
//     fill(actualColor.r, actualColor.g, actualColor.b);
//     rect(this.x, this.y, this.boxWidth, this.boxHeight);
//   }
// }
