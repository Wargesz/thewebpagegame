console.log("coinCollector: Ready");
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
    inGame = true;
    gameRunner = true;
    currentGame = "coinCollector";
    coinOnGround = false;
    i = 0;
    //
    document.write("loading...");
    coinGenerator();
    coinCollectorMapDraw();
    coinCollectorGameRunner();
    
}
//
function coinCollectorGameRunner() {
    document.onkeydown = function (event) {
        coinCollectorGameLoop();
    };
}
//
function coinCollectorGameLoop() {
    if (gameRunner == true && inGame == true && currentGame == "coinCollector") {
        coinGenerator();
        playerMove();
        enemyMove();
        coinCollectorMapDraw();
        updateChecker();     
        //
        coinCollectorGameRunner();
    }
    if (gameRunner == false && inGame == true && currentGame == "coinCollector") {
        for (i; i <= 0; i++) {
            document.write("GAME OVER<br>");
            document.write("hit space to restart");
        }
        if (event.key == " ") {
            coinCollectorSetup();
        }
    }
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
 function coinCollectorPlayerUp() {
        if (playerPosY != 1) {
            playerPosY--;
            playerHasMoved = true;
        }
    }
 function coinCollectorPlayerDown() {
        if (playerPosY != height) {
            playerPosY++;
            playerHasMoved = true;
        }
    }
 function coinCollectorPlayerLeft() {
        if (playerPosX != 1) {
            playerPosX--;
            playerHasMoved = true;
        }
    }
 function coinCollectorPlayerRight() {
        if (playerPosX != length) {
            playerPosX++;
            playerHasMoved = true;
        }
    }
//   
function playerMove() {
                if (event.key == "w" || event.key == "ArrowUp") {
                    coinCollectorPlayerUp();
                }
                if (event.key == "s" || event.key == "ArrowDown") {
                    coinCollectorPlayerDown();
                }
                if (event.key == "a" || event.key == "ArrowLeft") {
                    coinCollectorPlayerLeft();
                }
                if (event.key == "d" || event.key == "ArrowRight") {
                    coinCollectorPlayerRight();
                }            
    }
//
function coinCollectorMapDraw() {
    if (collectedCoins > highscore) {
        highscore = collectedCoins;
    }
    document.body.innerHTML = ' ';
    document.write("player x: " + playerPosX + ", y: " + playerPosY + "<br>");
    document.write("enemy x: " + enemyPosX + ", y: " + enemyPosY + "<br>");
    document.write("-----<br>");
    document.write("coins: " + collectedCoins + "<br>");
    document.write("highscore: " + highscore + "<br>");
    document.write("-----<br>");
        for (let y = 1; y <= height; y++) {
            for (let x = 1; x <= length; x++) {
                if (x == enemyPosX && y == enemyPosY) {
                    document.write('<img src="images/enemy.png">');
                    document.write(' ');
                }
                else if (x == playerPosX && y == playerPosY) {
                    document.write('<img src="images/player.png">');
                     document.write(' ');
                }
                else if (x == coinPosX && y == coinPosY && coinOnGround == true) {
                        document.write('<img src="images/coin.png">');
                        document.write(' ');
                }
                
                else document.write('<img src="images/space.png">');
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
        coinOnGround = true;
    }
}
//
function updateChecker() {
    if (playerPosX == enemyPosX && playerPosY == enemyPosY) {
        gameRunner = false;
    }
    if (playerPosX == coinPosX && playerPosY == coinPosY) {
        collectedCoins++;
        coinOnGround = false;
        coinGenerator();
        coinCollectorMapDraw();
    }
}
//