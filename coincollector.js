console.log("coinCollector: Ready");
//
    let playerPosX = 1;
    let playerPosY = 1;
    let coinPosX = 0;
    let coinPosY = 0;
    let height = 20;
    let length = 20;
    let enemyPosX = height;
    let enemyPosY = length;
    let highscore = 66;
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
function coinCollectorSetup() {
    playerPosX = 1;
    playerPosY = 1;
    coinPosX = 0;
    coinPosY = 0;
    height = 20;
    length = 20;
    enemyPosX = height;
    enemyPosY = length;
    highscore = 66;
    player = '0';
    enemy = 'x';
    space = '_';
    coin = '$';
    collectedCoins = 0;
    keyPressed = false;
    enemyMovementNumber = null;
    playerHasMoved = false;
    gameRunner = true;
    coinOnGround = false;
    coinCollectorGameLoop();
}
function coinCollectorGameLoop() {
        setTimeout(function () {
            if (gameRunner == true && inGame == true) {
                coinGenerator();
                mapDraw();
                playerMove();
                enemyMove();
                coinCollectorGameLoop();
            }
        }, 10);
}
function gameEndLoop() {
    setTimeout(function () {
        if (gameRunner == false && inGame == true) {
            mapDraw();
            document.write("GAME OVER<br>");
            document.write("hit space to restart<br>");
            document.write("hit esc to quit");
        document.addEventListener("keydown", function (event) {
            if (event.key == " ") {
                coinCollectorSetup();
            }
            if (event.key == "Escape") {
                inGame = false;
                mainLoop();
            }
        });
        gameEndLoop();
        }
    }, 10);
}
//
function enemyMove() {
    if (playerHasMoved == true) {
        enemyMovementNumber = Math.floor(Math.random() * 2);
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
 function playerUp() {
        if (playerPosY != 1) {
            playerPosY--;
            keyPressed = true;
            playerHasMoved = true;
        }
    }
 function playerDown() {
        if (playerPosY != height) {
            playerPosY++;
            keyPressed = true;
            playerHasMoved = true;
        }
    }
 function playerLeft() {
        if (playerPosX != 1) {
            playerPosX--;
            keyPressed = true;
            playerHasMoved = true;
        }
    }
 function playerRight() {
        if (playerPosX != length) {
            playerPosX++;
            keyPressed = true;
            playerHasMoved = true;
        }
    }
    //   
function playerMove() {
        if (playerPosX == enemyPosX && playerPosY == enemyPosY) {
            document.write("GAME OVER<br>");
            document.write("hit space to restart");
            gameRunner = false;
            gameEndLoop();
    }
    if (playerPosX == coinPosX && playerPosY == coinPosY) {
        collectedCoins++;
        coinOnGround = false;
    }
        keyPressed = false;
    document.addEventListener("keydown", function (event) {
            if (keyPressed == false) {
                if (event.key == "w" || event.key == "ArrowUp") {
                    playerUp();
                }
                if (event.key == "s" || event.key == "ArrowDown") {
                    playerDown();
                }
                if (event.key == "a" || event.key == "ArrowLeft") {
                    playerLeft();
                }
                if (event.key == "d" || event.key == "ArrowRight") {
                    playerRight();
                }
            }
        });
    }
//
function mapDraw() {
    if (collectedCoins > highscore) {
        highscore = collectedCoins;
    }
    document.body.innerHTML = '';
    document.write("player: 0<br>");
    document.write("enemy: x<br>");
    document.write("coin: $<br>");
    document.write("-----<br>");
    document.write("player x: " + playerPosX + ", y: " + playerPosY + "<br>");
    document.write("enemy x: " + enemyPosX + ", y: " + enemyPosY + "<br>");
    document.write("coin x: " + coinPosX + ", y: " + coinPosY + "<br>");
    document.write("-----<br>");
    document.write("coins: " + collectedCoins + "<br>");
    document.write("highscore: " + highscore + "<br>");
    document.write("-----<br>");
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
        coinPosX = Math.floor(Math.random() * height) + 1
        coinPosY = Math.floor(Math.random() * length) + 1;

        if (coinPosX == playerPosX && coinPosY == playerPosY) {
            coinGenerator();
        }
        if (coinPosX == enemyPosX && coinPosY == enemyPosY) {
            coinGenerator();
        }
    }
    coinOnGround = true;
}
