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
for (let y = 1; y <= height; y++)
{
    for (let x = 1; x <= length; x++)
    {
        if (x == playerPosX && y == playerPosY) {
            getElementById(player);
        }

        else if (x == enemyPosX && y == enemyPosY) {
            getElementById(enemy);
        }
        else getElementById(space);
    }
    getElementById(newline);
}