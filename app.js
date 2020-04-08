var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var width = 113;
var height = 98;

function drawHexagon(positionX, positionY) {
    context.beginPath();
    context.moveTo(positionX, positionY);
    context.lineTo(positionX + width / 2 * 0.5, positionY - height / 2);
    context.lineTo(positionX + width / 2 * 1.5, positionY - height / 2);
    context.lineTo(positionX + width / 2 * 2, positionY);
    context.lineTo(positionX + width / 2 * 1.5, positionY + height / 2);
    context.lineTo(positionX + width / 2 * 0.5, positionY + height / 2);
    context.lineTo(positionX, positionY);
    context.strokeStyle = 'orange';
    context.stroke();
}

drawHexagon(76, 120);
drawHexagon(76, 230);
drawHexagon(168.5, 65);
drawHexagon(168.5, 175);
drawHexagon(168.5, 285);
drawHexagon(261, 120);
drawHexagon(261, 230);

context.fillStyle = 'orange';
context.fill();

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

function drawCheckeredPattern(row, col) {
    for (var rowCounter = 0; rowCounter < row; rowCounter++) {
        for (var colCounter = 0; colCounter < col; colCounter++) {
            if (colCounter % 2 === rowCounter % 2) {
                context.fillStyle = 'rgb(255,255,255, 50%)';
            } else {
                context.fillStyle = 'rgb(0,0,0, 50%)';
            }
            context.fillRect(colCounter * canvasWidth / col, rowCounter * canvasHeight / row, canvasWidth / col, canvasHeight / row);
        }
    }
}

drawCheckeredPattern(8, 8);