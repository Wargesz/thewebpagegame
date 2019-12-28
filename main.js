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
let isMapUpdated = true;
//
document.addEventListener("keydown", function (event) {
    console.log(event);
    if (event.key == "w" && playerPosX != 1) {
        playerPosX--;
        isMapUpdated = true;
    }
    if (event.key == "s" && playerPosX != height) {
        playerPosX++;
        isMapUpdated = true;
    }
    if (event.key == "a" && playerPosY != 1) {
        playerPosY--;
        isMapUpdated = true;
    }
    if (event.key == "d" && playerPosY != length) {
        playerPosY++;
        isMapUpdated = true;
    }
});
//
if (isMapUpdated == true) {
    for (let y = 1; y <= height; y++) {
        for (let x = 1; x <= length; x++) {
            if (x == playerPosX && y == playerPosY) {
                document.write(player);
            }

            else if (x == enemyPosX && y == enemyPosY) {
                document.write(enemy);
            }
            else document.write(space);
        }
        document.write("<br>");
    }
    isMapUpdated = false;
}