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
//
document.addEventListener("keydown", function (event) {
    console.log(event);
    if (event.key == "W" && playerPosX != 1) {
        playerPosX--;
    }
    if (event.key == "S" && playerPosX != height) {
        playerPoSX++;
    }
    if (event.key == "A" && playerPosY != 1) {
        playerPosY--;
    }
    if (event.key == "D" && playerPosY != length) {
        playerPosY++;
    }
});
//
for (let y = 1; y <= height; y++)
{
    for (let x = 1; x <= length; x++)
    {
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