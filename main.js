console.log("main: Ready");

let gameChooser = 1;
let inGame = false;
//
mainLoop();
//
function mainLoop() {
    if (inGame == false) {
        setTimeout(function () {
            gameChanger();
            gameStarter();
            mainLoop();
        }, 10);
    }
}
function gameChanger() {
    document.body.innerHTML = '';
    document.write("Choose which game to play:<br>");
    document.write("(A/D), (Enter)<br>");
    document.write("x----------x<br>");
    if (gameChooser == 1) {
        document.write(" (CoinCollector)    <strike>BitGuest</strike>");
        document.write("<br><br>A simple snake game,<br>");
        document.write("But instead of you growing,<br>");
        document.write("An enemy is trying to catch you!<br>");
    }
    if (gameChooser == 2) {
        document.write("  CoinCollector    (<strike>BitGuest</strike>)");
        document.write("<br><br>IN DEVELOPMENT...<br>");
    }
    document.addEventListener("keydown", function (event) {
        if (event.key == "d" && gameChooser != 2 || event.key == "ArrowRight" && gameChooser != 2) {
            gameChooser++;
        }
        if (event.key == "a" && gameChooser != 1 || event.key == "ArrowLeft" && gameChooser != 1) {
            gameChooser--;
        }
    }); 
}
function gameStarter() {
    document.addEventListener("keydown", function (event) {
        if (gameChooser == 1 && event.key == "Enter") {
            coinCollectorSetup();
            inGame = true;
        }
        if (gameChooser == 2 && event.key == "Enter") {
            bitQuestStart();
            inGame = true;
        }
    });
}