console.log("Ready");

let playerPosX = 1;
let playerPosY = 1;
let enemyPosX = 5;
let enemyPosY = 7;
let height = 8;
let length = 8;
let player = '0';
let enemy = 'x';
let space = '.';
let gameRunner = 1;
let keyPressed = false;
//
gameLoop();
//
    function gameLoop() {
        setTimeout(function () {
            mapDraw();
            move();
            gameLoop();
        }, 1000);
    }
//
function move() {
    keyPressed = false;
        document.addEventListener("keydown", function (event) {
            if (keyPressed == false) {
                if (event.key == "w" && playerPosY != 1) {
                    playerPosY--;
                    keyPressed = true;
                }
                if (event.key == "s" && playerPosY != height) {
                    playerPosY++;
                    keyPressed = true;
                }
                if (event.key == "a" && playerPosX != 1) {
                    playerPosX--;
                    keyPressed = true;
                }
                if (event.key == "d" && playerPosX != length) {
                    playerPosX++;
                    keyPressed = true;
                }
            }
        });
    }
//
function mapDraw() {
    document.body.innerHTML = '';
        for (let y = 1; y <= height; y++) {
            for (let x = 1; x <= length; x++) {
                if (x == playerPosX && y == playerPosY) {
                    document.write(player)
                }
                else if (x == enemyPosX && y == enemyPosY) {
                    document.write(enemy)
                }
                else document.write(space)
            }
            document.write("<br>")
        }
    }