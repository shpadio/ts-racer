import { Game } from "./models/Game";

const canvas: HTMLCanvasElement = document.createElement("canvas");
canvas.className = "canvas";

const greetingsModal = document.createElement("div");
document.append(
  (greetingsModal.innerHTML = `<div><h6>Start a game</h6><button id="start">OK</button></div>`)
);

const startGame = () => {
  document.removeChild(greetingsModal);
  alert("game started!");
  const game = new Game(canvas);
  const player = game.init();

  while (!player.isDead) {
    console.log(player.x,'x')
    console.log(player.y,'y')
    game.run()
    player.play(game.level)
  }

  game.finish();
};

const startButton = document.getElementById("start");
startButton?.addEventListener("click", startGame);
