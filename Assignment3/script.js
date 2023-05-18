
const mainContainer = document.getElementById("main-container");
function drawBall(x, y) {
  const mainContainer = document.getElementById("main-container");
  const ball_el = document.createElement("div"); //Creating div to place the ball
  ball_el.classList.add("ball"); //Adding Css property to ball_el
  ball_el.style.left = x + "px";
  ball_el.style.bottom = y + "px";
  mainContainer.appendChild(ball_el); //Adding ball_el to  main Container
  console.log("hello");
}

quantity= parseInt(prompt('Enter the number of balls you want:'));
const balls=[{}];
for (let i = 0; i < quantity; i++) {
  const ball = createBall();
  balls.push(ball);
  console.log(ball);
  drawBall(ball.x, ball.y);
  setInterval(function() {
    moveBall(ball);
  }, 10);
}

//For the ball to move around
function moveBall(ball) {
  const mainContainer = document.getElementById("main-container");
  ball.x = ball.x + ball.dx;
  ball.y = ball.y + ball.dy;
  mainContainer.removeChild(document.querySelector(".ball"));
  drawBall(ball.x, ball.y);
  console.log("move");
  collision(balls);
  if (ball.x + 22 > mainContainer.offsetWidth || ball.x < 2) {
    ball.dx *= -1;
  }
  if (ball.y +22> mainContainer.offsetHeight || ball.y < 2) {
    ball.dy *= -1;
  }
}
//Random Value for X direction
function randomIntFromIntervalX() {
  let minX = 0;
  let maxX = mainContainer.offsetWidth;
  let randomX = Math.floor(Math.random() * (maxX - minX + 1) + minX);
  return randomX;
}
//Random Value fro Y direction
function randomIntFromIntevalY() {
  let minY = 0;
  let maxY = mainContainer.offsetHeight;
  let randomY = Math.floor(Math.random() * (maxY - minY + 1) + minY);
  return randomY;
}

//Creating ball with random value
function createBall(){
let ball = {};
ball.x = randomIntFromIntervalX();
ball.y = randomIntFromIntevalY();
ball.dx = Math.random();
ball.dy = Math.random();
return ball;  
};


function collision(balls) {
  for (let i = 0; i < balls.length; i++) {
    for (let j = i + 1; j < balls.length; j++) {
      const ball1 = balls[i];
      const ball2 = balls[j];
      
      const dx = ball2.x - ball1.x;
      const dy = ball2.y - ball1.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 20) { 
        // Reverse the direction of both balls
        ball1.dx *= -1;
        ball1.dy *= -1;
        ball2.dx *= -1;
        ball2.dy *= -1;
      }
    }
  }
}