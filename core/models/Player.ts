export class Player {
  x: number;
  y: number;
  speed: number;
  score: number;
  isDead: boolean;

  constructor(x: number, y: number, speed: number, score = 0, isDead: boolean = false) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.score = score
    this.isDead = isDead
  }

  hit() {
    this.isDead = true
  }

  accelerate() {}

  brake() {}

  moveLeft() {}

  moveRight() {}

  increaseScore() {
    setInterval(() => {
      this.score +=10
    },1000)
  }
}
