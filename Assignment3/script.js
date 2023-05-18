class BouncingBallGame {
  constructor() {
    this.mainContainer = document.getElementById("main-container");
    this.balls = [];
  }
  
  init() {
    this.createBalls();
    this.collision();
    this.startGame();
    this.collision();
  }
  

  //Creating ball object
  createBall() {
    let ball = {};
    ball.x = this.randomIntFromIntervalX();
    ball.y = this.randomIntFromIntevalY();
    ball.dx = Math.random();
    ball.dy = Math.random();
    return ball;
  }
  //Creating balls array containing ball object
  createBalls() {
    const quantity = parseInt(prompt('Enter the number of balls you want:'));
    for (let i = 0; i < quantity; i++) {
      const ball = this.createBall();
      this.balls.push(ball);
    }
  }
  //Starts the game
  startGame() {
      for (const ball of this.balls) {
        this.drawBall(ball.x, ball.y);
        ball.intervalId = setInterval(() => {
          this.moveBall(ball);
        }, 5);
      }
    }
  //Drawing the ball
  drawBall(x, y) {
    const ball_el = document.createElement("div");//Creating a div for balls
    ball_el.classList.add("ball");
    ball_el.style.left = x + "px";
    ball_el.style.bottom = y + "px";
    this.mainContainer.appendChild(ball_el);
    console.log("hello");
  }
  //For Moving the ball
  moveBall(ball) {
      ball.x = ball.x + ball.dx;
      ball.y = ball.y + ball.dy;
      this.mainContainer.removeChild(document.querySelector(".ball"));//To remove the previous ball
      this.drawBall(ball.x, ball.y);
      console.log("move");
      this.collision();//to Check the collision between the balls
      //To check the collision on the container wall
      if (ball.x+19> this.mainContainer.offsetWidth || ball.x < 0) {
        ball.dx *= -1;
      }
      if (ball.y+19>this.mainContainer.offsetHeight || ball.y < 0) {
        ball.dy *= -1;
      }
    }
  //Random Values for x
  randomIntFromIntervalX() {
    let minX = 0;
    let maxX = this.mainContainer.offsetWidth - 2;
    return Math.floor(Math.random() * (maxX - minX + 1) + minX);
  }
  
  //Random Values for y
  randomIntFromIntevalY() {
    let minY = 0;
    let maxY = this.mainContainer.offsetHeight - 2;
    return Math.floor(Math.random() * (maxY - minY + 1) + minY);
  }
  
  collision() {
    for (let i = 0; i < this.balls.length; i++) {
      for (let j = i + 1; j < this.balls.length; j++) {
        const ball1 = this.balls[i];
        const ball2 = this.balls[j];
      
        const dx = ball2.x - ball1.x;
        const dy = ball2.y - ball1.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
      
        if (distance < 19) { 
          // Reverse the direction of both balls
          ball1.dx *= -1;
          ball1.dy *= -1;
          ball2.dx *= -1;
          ball2.dy *= -1;
        }
      }
    }
  }
}

// Playing Game:
const game = new BouncingBallGame();
game.init();