console.log("coinMiner: Ready");
//
function coinMinerSetup() {
    collectedCoins = 0;
    inGame = true;
    gameRunner = true;
    currentGame = "coinMiner";
    //
    coinMinerGenerator();
}
//
function coinMinerGenerator() {
    mainDiv = document.getElementById('main');
    element = document.createElement('BUTTON');
    element.setAttribute("onClick","coinMinerClearer()");
    element.innerText = "xd";
    mainDiv.appendChild(element);
}
function coinMinerClearer() {
    document.getElementById('index')
}