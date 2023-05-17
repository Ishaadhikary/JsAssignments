// class BallBounsingGame{
//   constructor(x,y,dx,dy){
//     this.x=x;
//     this.y=y;
//     this.dx=dx;
//     this.dy=dy;
//   }
//   drawBall(x,y);
//   setInterval(moveBall, time);
//   moveBall(x,y);

// }

function drawBall(x, y) {
  const mainContainer = document.getElementById("main-container");
  const ball_el = document.createElement("div"); //Creating div to place the ball
  ball_el.classList.add("ball"); //Adding Css property to ball_el
  ball_el.style.left = x + "px";
  ball_el.style.bottom = y + "px";
  mainContainer.appendChild(ball_el); //Adding ball_el to  main Container
  console.log("hello");
}

const ball = { x: 10, y: 10, dx: 10, dy: 10 };
//For the ball to move around
function moveBall(x, y) {
  const mainContainer = document.getElementById("main-container");
  ball.x = ball.x + ball.dx;
  ball.y = ball.y + ball.dy;
  mainContainer.removeChild(document.querySelector(".ball"));
  drawBall(ball.x, ball.y);
  console.log("move");

  if (ball.x + 21 > mainContainer.offsetWidth || ball.x < 1) {
    ball.dx *= -1;
  }
  if (ball.y +21> mainContainer.offsetHeight || ball.y < 1) {
    ball.dy *= -1;
  }
}
drawBall(ball.x, ball.y);
setInterval(moveBall, 1050);
