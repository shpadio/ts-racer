import { Mob } from "./Mob";
import { Player } from "./Player";

const ONE_MINUTE_IN_MS = 60 * 1000;

export class Game {
  canvas: HTMLCanvasElement;
  level: number;

  constructor(canvas: HTMLCanvasElement, level: number = 1) {
    this.canvas = canvas;
    this.level = level;
  }

  init() {
    const road = document.getElementById("road") as Node;
    this.canvas.appendChild(road);
    const player = new Player(0, 0, 30);
    road.appendChild(player as unknown as Node);
    return player;
  }

  run(){
    this.increaseLevel()
    this.renderMobs()
  }

  finish() {
    alert("GAME IS FINISHED!");
  }

  increaseLevel() {
    setInterval(() => {
      this.level += 1;
    }, ONE_MINUTE_IN_MS);
  }

  renderMobs() {
    for (let i = 0; i <= 10; i++) {
      setInterval(() => {
        //TODO write a function which assigns coordinates to random values in a particular range
        const mobX = 500;
        const mobY = 300;

        const mob = new Mob(500, 300, 10) as unknown as Node;
        this.canvas.append(mob);
      }, 2000);
    }
  }
}
