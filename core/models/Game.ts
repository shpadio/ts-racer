import { Mob } from "./Mob";

export class Game {
  canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
  }

  renderMobs() {
    for (let i = 0; i <= 10; i++) {
        //TODO write a function which assign coordinates to random values in a particular range
        const mobX = 500
        const mobY = 300;

      const mob = new Mob(500, 300, 10) as unknown as Node;
      this.canvas.append(mob);
    }
  }
}
