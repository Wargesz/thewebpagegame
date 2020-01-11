console.log("Ready");

let playerPosX = 1;
let playerPosY = 1;
let enemyPosX = 20;
let enemyPosY = 20;
let coinPosX = 0;
let coinPosY = 0;
let height = 20;
let length = 20;
let player = '0';
let enemy = 'x';
let space = '_';
let coin = '$';
let collectedCoins = 0;
let keyPressed = false;
let enemyMovementNumber = null;
let playerHasMoved = false;
let gameRunner = true;
let coinOnGround = false;
//
gameLoop();
//
    function gameLoop() {
        setTimeout(function () {
            if (gameRunner == true) {
                coinGenerator();
                mapDraw();
                playerMove();
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
function playerMove() {
        if (playerPosX == enemyPosX && playerPosY == enemyPosY) {
            document.write("GAME OVER");
            gameRunner = false;
    }
    if (playerPosX == coinPosX && playerPosY == coinPosY) {
        collectedCoins++;
        coinOnGround = false;
    }
        keyPressed = false;
        document.addEventListener("keydown", function (event) {
        console.log(event);
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
    document.write("player: 0<br>");
    document.write("enemy: x<br>");
    document.write("coin: $<br>");
    document.write("player x: " + playerPosX + ", y: " + playerPosY + "<br>");
    document.write("enemy x: " + enemyPosX + ", y: " + enemyPosY + "<br>");
    document.write("coin x: " + coinPosX + ", y: " + coinPosY + "<br>");
    document.write("coins: "+ collectedCoins + "<br>");
        for (let y = 1; y <= height; y++) {
            for (let x = 1; x <= length; x++) {
                if (x == coinPosX && y == coinPosY) {
                    document.write(coin);
                    document.write(' ');
                }
                else if (x == enemyPosX && y == enemyPosY) {
                    document.write(enemy);
                    document.write(' ');
                }
                else if (x == playerPosX && y == playerPosY) {
                    document.write(player);
                    document.write(' ');
                }
                else document.write(space);
                document.write(' ');
            }
            document.write("<br>");
        }
}
//
function coinGenerator() {
    if (coinOnGround == false) {
        coinPosX = Math.floor(Math.random() * 20) + 1
        coinPosY = Math.floor(Math.random() * 20) + 1;

        if (coinPosX == playerPosX && coinPosY == playerPosY) {
            coinGenerator();
        }
        if (coinPosX == enemyPosX && coinPosY == enemyPosY) {
            coinGenerator();
        }
    }
    coinOnGround = true;
}