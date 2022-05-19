import { Mob } from "./Mob";
import { Player } from "./Player";

export class Game {
  canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
  }

  init() {
    const road = document.getElementById("road") as Node;
    this.canvas.appendChild(road);
    const player = new Player(0, 0, 30);
    road.appendChild(player as unknown as Node);
    return player;
  }

  finish() {
    alert("GAME IS FINISHED!");
  }

  renderMobs() {
    for (let i = 0; i <= 10; i++) {
      //TODO write a function which assigns coordinates to random values in a particular range
      const mobX = 500;
      const mobY = 300;

      const mob = new Mob(500, 300, 10) as unknown as Node;
      this.canvas.append(mob);
    }
  }
}
