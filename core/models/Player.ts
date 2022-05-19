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

  play(level: number){
    this.increaseScore(level)
    this.increaseSpeed()
  }

  hit() {
    this.isDead = true
  }

  accelerate() {}

  brake() {}

  moveLeft() {}

  moveRight() {}

  increaseSpeed(){
    this.speed += 10
  }

  increaseScore(level: number) {
    setInterval(() => {
      this.score += level*10
    },1000)
  }
}
