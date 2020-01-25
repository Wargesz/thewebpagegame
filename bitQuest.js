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
    //
    bitQuestGameLoop();
}
//
function bitQuestGameLoop() {
    setTimeout(function () {
        if (gameRunner == true && inGame == true) {
            bitQuestMapDraw();
            bitQuestPlayerMove();
            bitQuestGameLoop();
        }
    }, 10);
   
}
//
function bitQuestMapDraw() {
    mapTileCounter = 0;
    document.body.innerHTML = ' ';
    document.write("player: 0<br>");
    document.write("wall: #<br>");
    document.write("-----<br>");
    document.write("player x: " + playerPosX + ", y: " + playerPosY + "<br>");
    document.write("-----<br>");
        for (y = 1; y <= height; y++) {
            for (x = 1; x <= length; x++) {
                if (y == playerPosY && x == playerPosX) {
                    document.write(player);
                    document.write(" ");
                    playerPosNumber = mapTileCounter; 
                    mapTileCounter++;
                }
                else if (spawnMap[mapTileCounter] == 1) {
                        document.write(wall);
                        document.write(" ");
                        mapTileCounter++;
                }
                else if (spawnMap[mapTileCounter] == 0) {
                        document.write(space);
                        document.write(" ");
                        mapTileCounter++;
                    }
            }
            document.write("<br>");
    }
    document.write("hit space to restart<br>");
    document.write("hit esc to quit");
}
//
function bitQuestPlayerUp() {
    for (y; y == 1; y++) {
        playerPosY--;
    }
}
function bitQuestPlayerDown() {
    for (y; y == 1; y++) {
        playerPosY++;
    }
}
function bitQuestPlayerLeft() {
    for (y; y == 1; y++) {
        playerPosX--;
    }
}
function bitQuestPlayerRight() {
    for (y; y == 1; y++) {
        playerPosX++;
    }
}
//
function bitQuestPlayerMove() {
    y = 1;
    keyPressed = false;
    if (keyPressed == false) {
        document.addEventListener("keydown", function (event) {
            if (event.key == "a" || event.key == "ArrowLeft") {
                playerNextMoveNumber = playerPosNumber - 1;
                if (spawnMap[playerNextMoveNumber] == 0) {
                    bitQuestPlayerLeft();
                }
            }
            if (event.key == "d" || event.key == "ArrowRight") {
                playerNextMoveNumber = playerPosNumber + 1;
                if (spawnMap[playerNextMoveNumber] == 0) {
                    bitQuestPlayerRight();
                }
            }
            if (event.key == "w" || event.key == "ArrowUp") {
                playerNextMoveNumber = playerPosNumber - 20;
                if (spawnMap[playerNextMoveNumber] == 0) {
                    bitQuestPlayerUp();
                }
            }
            if (event.key == "s" || event.key == "ArrowDown") {
                playerNextMoveNumber = playerPosNumber + 20;
                if (spawnMap[playerNextMoveNumber] == 0) {
                    bitQuestPlayerDown();
                }
            }
            if (event.key == " ") {
                bitQuestSetup();
            }
            if (event.key == "Escape") {
                inGame = false;
                gameRunner = false;
                gameChooser = "right"
                mainLoop();
            }
        });
    }
    keyPressed = true;
}