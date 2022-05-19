export class Player {
  x: number;
  y: number;
  speed: number;
  score: number;

  constructor(x: number, y: number, speed: number,score = 0) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.score = score
  }

  moveStraight(){

  }

  accelerate() {}

  brake() {}

  moveLeft() {}

  moveRight() {}

  increaseScore(){
    this.score +=10
  }
}
