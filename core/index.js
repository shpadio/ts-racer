"use strict";
exports.__esModule = true;
var Game_1 = require("./models/Game");
var canvas = document.createElement("canvas");
canvas.className = "canvas";
var greetingsModal = document.createElement("div");
document.append((greetingsModal.innerHTML = "<div><h6>Start a game</h6><button id=\"start\">OK</button></div>"));
var startGame = function () {
    document.removeChild(greetingsModal);
    alert("game started!");
    var game = new Game_1.Game(canvas);
    var player = game.init();
    while (!player.isDead) {
        console.log(player.x, 'x');
        console.log(player.y, 'y');
        game.run();
        player.play(game.level);
    }
    game.finish();
};
var startButton = document.getElementById("start");
startButton === null || startButton === void 0 ? void 0 : startButton.addEventListener("click", startGame);
