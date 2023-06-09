var self = this; // Store reference to 'this'
class FlappyBirdGame {
  constructor() {
    this.container = document.getElementById("container");
    this.instruction = document.querySelector(".instruction");
    this.scoreBoard = document.getElementById("scoreBoard");
    this.playButton = document.getElementById("playButton");

    this.flappyBird = document.createElement("div");
    this.flappyBird.id = "flappyBird";
    this.container.appendChild(this.flappyBird);
    this.flappyBirdY = this.flappyBird.style.top;
    this.flappyBird.style.top = 400 + "px"; //Initialize the top for the bird
    this.flappyBirdY = this.flappyBird.style.top;

    this.gravity = 9.8 + "px";

    this.topPillars = []; //Add all the top pillars to the array
    this.bottomPillars = []; //Add all the bottom pillars to the array
    this.topPillar = null;
    this.bottomPillar = null;
    this.collisionPillarLeft = 600 + "px";
    this.score=0;
    this.highScore=0;

    this.pillars===this.topPillars?this.topPillars:this.bottomPillars

  }
  init() {
    this.createPillars();
    requestAnimationFrame(this.animatePillars.bind(this));

    // this.startGame();
    // this.endGame();
  }
  createPillars() {
    this.score = 0
    console.log("Creation of pillars");
    console.log(this.flappyBird);
    //Adding all the top pillars to the Array
    this.topPillars.push("assets/images/Pillar1Top.svg");
    this.topPillars.push("assets/images/pillar2Top.svg");
    this.topPillars.push("assets/images/pillar3Top.svg");
    this.topPillars.push("assets/images/pillar4Top.svg");
    this.topPillars.push("assets/images/pillar5Top.svg");
    this.topPillars.push("assets/images/pillar6Top.svg");
    this.topPillars.push("assets/images/pillar7Top.svg");
    this.topPillars.push("assets/images/pillar8Top.svg");

    //Adding all the bottom pillars to the Array
    this.bottomPillars.push("assets/images/Pillar1Bottom.svg");
    this.bottomPillars.push("assets/images/pillar2Bottom.svg");
    this.bottomPillars.push("assets/images/pillar3Bottom.svg");
    this.bottomPillars.push("assets/images/pillar4Bottom.svg");
    this.bottomPillars.push("assets/images/pillar5Bottom.svg");
    this.bottomPillars.push("assets/images/pillar6Bottom.svg");
    this.bottomPillars.push("assets/images/pillar7Buttom.svg");
    this.bottomPillars.push("assets/images/pillar8Bottom.svg");
    let currentPosition = 0;

    //Adding all the  pillars to the Document
    for (let i = 0; i < 8; i++) {
      this.topPillar = document.createElement("img");
      this.bottomPillar = document.createElement("img");
      this.topPillar.src = this.topPillars[i];
      this.bottomPillar.src = this.bottomPillars[i];
      this.topPillar.alt = "Pillar Img";
      this.bottomPillar.alt = "Pillar Img";
      this.topPillar.style.position = "absolute";
      this.bottomPillar.style.position = "absolute";
      this.topPillar.style.top = 0;
      this.bottomPillar.style.bottom = 95 + "px";
      this.topPillar.style.left = currentPosition + "px";
      this.bottomPillar.style.left = currentPosition + "px";
      currentPosition += 248;
      this.container.append(this.topPillar);
      this.container.append(this.bottomPillar);
    }
    addEventListener("click", () => this.initializeGame());
  }
  initializeGame() {
    console.log("Welcome to initial part of the game");
    this.container.removeChild(this.instruction);
    this.flappyBirdFly();
    // this.gameOver();
  }

  flappyBirdFly() {
    //To check if space bar is pressed
    this.movingBird();
  }

  //TO move the flappy bird
  movingBird() {
    let flag = false;
    document.addEventListener("keydown", (e) => {
      if (e.code === "Space") {
        flag = true; //
      }
    });

    setInterval(() => {
      //Move flappy bird up
      if (flag) {
        this.flappyBirdY =
          parseFloat(this.flappyBirdY) - parseFloat(this.gravity);
        this.flappyBird.style.top = this.flappyBirdY + "px";
      }
      //Move Flappy bird down
      else {
        this.flappyBirdY =
          parseFloat(this.flappyBirdY) + parseFloat(this.gravity);
        this.flappyBird.style.top = this.flappyBirdY + "px";
      }

      flag = false; // Reset the flag
    }, 300);
    setInterval(this.checkCollision(), 300)
  }

  checkCollision() {
    this.topPillars.forEach((pillar) => {
      if (pillar === this.topPillar) {
        if (
          parseFloat(this.pillar.style.bottom) > parseFloat(this.flappyBird.style.top) &&
          this.flappyBird.style.left === this.topPillar.style.left
        ) {
          this.gameOver();
          console.log("Collision")
        } else if (
          this.flappyBird.style.left === this.topPillar.style.left &&
          parseFloat(this.flappyBird.style.top) < parseFloat(this.topPillar.style.bottom)
        ) {
          console.log("No collision")
          this.scoreBoard();
        }
      }
    });
  
    this.bottomPillars.forEach((pillar) => {
      if (pillar === this.bottomPillar) {
        if (
          parseFloat(this.pillar.style.top) > parseFloat(this.flappyBird.style.top) &&
          this.flappyBird.style.left === this.bottomPillar.style.left
        ) {
          this.gameOver();
        } else if (
          this.flappyBird.style.left === this.bottomPillar.style.left &&
          parseFloat(this.flappyBird.style.top) > parseFloat(this.bottomPillar.style.top)
        ) {
          this.scoreBoard();
        }
      }
    });
  }
  
  
  scoreCounter() {
    console.log(this.score);
    this.score++;
    let heading = this.scoreBoard.querySelector("h1");
    
    if (!heading) {
      // Create the <h1> element if it doesn't exist
      heading = document.createElement("h1");
      this.scoreBoard.appendChild(heading);
    }

    // Update score
    heading.innerText = "Score: " + score;

  }

  gameOver(){
    this.gameOverBox = document.createElement("div")
    this.gameOverBox.id = "gameOverBox"
    this.gameOverBox.innerHTML= "Game Over"+"<br>"+"PlayAgain"
    this.restart = document.createElement("button")
    this.restart.textContent = "Restart";
    this.restart.id = "restart"
    this.gameOverBox.appendChild(this.restart)
    this.container.appendChild(this.gameOverBox)
  }
  
  

  //Moving the pillars
  animatePillars() {
    const pillars = this.container.querySelectorAll("img");
    pillars.forEach((pillar) => {
      let left = parseInt(pillar.style.left);
      if (left > 0) {
        //Decresing the pillar to the left
        pillar.style.left = left - 1 + "px";
      } else {
        pillar.style.left = left - 1 + "px";
        //Reseting the pipe so that when pipe is generated in loop it maintains the spacing
        if (left <= -248) {
          this.randomIndex = Math.floor(Math.random() * 8);
          if(pillar.src === this.topPillar) this.topPillars[randomIndex]
          else if(pillar.src ==this.bottomPillar) this.bottomPillars[randomIndex];
          pillar.style.left = left + 248 * 8 + "px";
        }
      }
    });
    requestAnimationFrame(this.animatePillars.bind(this));
  }
}

const flappyBird = new FlappyBirdGame();
flappyBird.init();
