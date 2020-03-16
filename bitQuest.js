console.log("bitQuest: Ready");
//
function bitQuestSetup() {
    inGame = true;
    gameRunner = true;
    length = 20;
    height = 20;
    keyPressed = false;
    playerPosX = 2;
    playerPosY = 2;
    mapTileCounter = 0;
    currentMap = map11;
    gatePosY = 17;
    gatePosX = 20;
    playerHasMoved = true;
    currentGame = "bitQuest";
    //
    document.write("loading...");
    bitQuestMapDraw();
    bitQuestRunner();
}
//
function bitQuestRunner() {
    document.onkeydown = function (event) {
        bitQuestGameLoop();
    };
}
//
function bitQuestGameLoop() {
    if (gameRunner == true && inGame == true && currentGame == "bitQuest") {
        bitQuestPlayerMove();
        bitQuestMapDraw();
        bitQuestMapChanger();
        //
        bitQuestRunner();
    }
}
//
function bitQuestMapChanger() {
    if (playerHasMoved == true && currentMap == map11 &&
        playerPosX == gatePosX && playerPosY == gatePosY) {
        currentMap = map12
        playerPosX = 1;
        playerPosY = 17;
        gatePosX = 1;
        gatePosY = 17;
        playerHasMoved = false;
        bitQuestMapDraw();
    }
    if (playerHasMoved == true && currentMap == map12 &&
        playerPosX == gatePosX && playerPosY == gatePosY) {
        currentMap = map11
        playerPosX = 20;
        playerPosY = 17;
        gatePosX = 20;
        gatePosY = 17;
        playerHasMoved = false;
        bitQuestMapDraw();
    }
}
//
function bitQuestMapDraw() {
    mapTileCounter = 0;
    document.body.innerHTML = ' ';
    document.write("-----<br>");
    document.write("player x: " + playerPosX + ", y: " + playerPosY + "<br>");
    document.write("-----<br>");
    for (y = 1; y <= height; y++) {
        for (x = 1; x <= length; x++) {
            if (y == playerPosY && x == playerPosX) {
                document.write('<img src="images/player.png">');
                document.write(" ");
                playerPosNumber = mapTileCounter;
                mapTileCounter++;
            }
            else if (currentMap[mapTileCounter] == 1) {
                document.write('<img src="images/wall.png">');
                document.write(" ");
                mapTileCounter++;
            }
            else if (currentMap[mapTileCounter] == 0) {
                document.write('<img src="images/space.png">');
                document.write(" ");
                mapTileCounter++;
            }
            else if (currentMap[mapTileCounter] == 2) {
                document.write('<img src="images/gate.png">');
                document.write(" ");
                mapTileCounter++;
            }
        }
        document.write("<br>");
    }
    document.write("hit space to restart<br>");
}
//
function bitQuestPlayerUp() {
    for (y; y == 1; y++) {
        playerPosY--;
        playerHasMoved = true;
    }
}
//
function bitQuestPlayerDown() {
    for (y; y == 1; y++) {
        playerPosY++;
        playerHasMoved = true;
    }
}
//
function bitQuestPlayerLeft() {
    for (y; y == 1; y++) {
        playerPosX--;
        playerHasMoved = true;
    }
}
//
function bitQuestPlayerRight() {
    for (y; y == 1; y++) {
        playerPosX++;
        playerHasMoved = true;
    }
}
//
function bitQuestPlayerMove() {
    y = 1;
    keyPressed = false;
            if (event.key == "a" || event.key == "ArrowLeft") {
                playerNextMoveNumber = playerPosNumber - 1;
                if (currentMap[playerNextMoveNumber] != 1) {
                    bitQuestPlayerLeft();
                }
            }
            if (event.key == "d" || event.key == "ArrowRight") {
                playerNextMoveNumber = playerPosNumber + 1;
                if (currentMap[playerNextMoveNumber] != 1) {
                    bitQuestPlayerRight();
                }
            }
            if (event.key == "w" || event.key == "ArrowUp") {
                playerNextMoveNumber = playerPosNumber - 20;
                if (currentMap[playerNextMoveNumber] != 1) {
                    bitQuestPlayerUp();
                }
            }
            if (event.key == "s" || event.key == "ArrowDown") {
                playerNextMoveNumber = playerPosNumber + 20;
                if (currentMap[playerNextMoveNumber] != 1) {
                    bitQuestPlayerDown();
                }
            }
            if (event.key == " ") {
                bitQuestSetup();
            }
            if (event.key == "Escape") {
                inGame = false;
                gameRunner = false;
                currentGame = "none";
                gameChooser = "right";
                mainLoop();
            }
}