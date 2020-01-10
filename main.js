console.log("Ready");

let playerPosX = 1;
let playerPosY = 1;
let enemyPosX = 5;
let enemyPosY = 7;
let height = 8;
let length = 8;
let player = '0';
let enemy = 'x';
let space = '_';
let gameRunner = 1;
let keyPressed = false;
let enemyHealth = 10;
let enemyMovementNumber = null;
let playerHasMoved = false;
let gameRunner = true;
//
gameLoop();
//
    function gameLoop() {
        setTimeout(function () {
            if (gameRunner == true) {
                mapDraw();
                move();
                enemyMove();
                gameLoop();
            }
        }, 10);
    }
//
function enemyMove() {
    if (playerHasMoved == true) {

        enemyMovementNumber = Math.floor(Math.random() * 2);
        console.log(enemyMovementNumber);

        if (enemyPosX == playerPosX) {
            enemyMovementNumber = 1;
        }
        if (enemyPosY == playerPosY) {
            enemyMovementNumber = 0;
        }
        if (enemyMovementNumber == 0 && enemyPosX > playerPosX) {
            enemyPosX--;
        }
        if (enemyMovementNumber == 0 && enemyPosX < playerPosX) {
            enemyPosX++;
        }
        if (enemyMovementNumber == 1 && enemyPosY < playerPosY) {
            enemyPosY++;
        }
        if (enemyMovementNumber == 1 && enemyPosY > playerPosY) {
            enemyPosY--;
        }
        playerHasMoved = false;
    }
}
//
function move() {
    if (playerPosX == enemyPosX && playerPosY == enemyPosY) {
        document.write("GAME OVER");
        gameRunner = false;
    }
        keyPressed = false;
        document.addEventListener("keydown", function (event) {
            if (keyPressed == false) {
                if (event.key == "w" && playerPosY != 1) {
                    playerPosY--;
                    keyPressed = true;
                    playerHasMoved = true;
                }
                if (event.key == "s" && playerPosY != height) {
                    playerPosY++;
                    keyPressed = true;
                    playerHasMoved = true;
                }
                if (event.key == "a" && playerPosX != 1) {
                    playerPosX--;
                    keyPressed = true;
                    playerHasMoved = true;
                }
                if (event.key == "d" && playerPosX != length) {
                    playerPosX++;
                    keyPressed = true;
                    playerHasMoved = true;
                }
            }
        });
    }
//
function mapDraw() {
    document.body.innerHTML = '';
    document.write("player y: " + playerPosY + " , x: " + playerPosX + "<br>");
    document.write("enemy y: " + enemyPosY + " , x: " + enemyPosX + "<br>");
        for (let y = 1; y <= height; y++) {
            for (let x = 1; x <= length; x++) {
                if (x == playerPosX && y == playerPosY) {
                    document.write(player);
                    document.write(' ');
                }
                else if (x == enemyPosX && y == enemyPosY) {
                    document.write(enemy);
                    document.write(' ');
                }
                else document.write(space);
                document.write(' ');
            }
            document.write("<br>");
        }
    }