console.log("coinMiner: Ready");
//
function coinMinerSetup() {
    coinMinerGameRunner();
}
//
function coinMinerGameRunner() {
    document.onkeydown = function (event) {
        coinMinerGameLoop();
    };
}
//
function coinMinerGameLoop() {
    if (gameRunner == true && inGame == true && currentGame == "coinMiner") {
        //
        coinMinerGameRunner();
    }
}