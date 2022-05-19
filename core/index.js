"use strict";
exports.__esModule = true;
var Game_1 = require("./models/Game");
var canvas = document.createElement('canvas');
canvas.className = 'canvas';
var greetingsModal = document.createElement('div');
document.append(greetingsModal.innerHTML = "<div><h6>Start a game</h6><button id=\"start\">OK</button></div>");
var startButton = document.getElementById('start');
startButton === null || startButton === void 0 ? void 0 : startButton.addEventListener('click', function () {
    alert('game started!');
    var game = new Game_1.Game(canvas);
    console.log(game, 'GAME!');
});
var player = document.createElement('div');
var road = document.getElementById('road');
player.className = 'player';
canvas === null || canvas === void 0 ? void 0 : canvas.appendChild(road);
road.appendChild(player);
