const WIDTH = 22;
const HEIGHT = 20;
let score = 0;

class AntCrushingGame {
  constructor() {
    this.mainContainer = document.getElementById("main-container");
    this.ants = []; //containg all the ants
    this.mainContainer = document.getElementById("main-container");
    this.sideContainer = document.getElementById("side-container");
    this.intervalIds = []; // Store interval IDs
    this.score = 0; // Initialize the score
  }

  init() {
    this.createAnts();
    this.startGame();
  }

  // Creating Ant
  createAnt() {
    let ant = {};
    ant.id = "ant-" + Math.floor(Math.random() * 1000); // Generate unique ID
    ant.x = this.randomIntFromIntervalX();
    ant.y = this.randomIntFromIntevalY();
    ant.dx = Math.random();
    ant.dy = Math.random();

    return ant;
  }

  // Array of Ants
  createAnts() {
    for (let i = 0; i < 20; i++) {
      const ant = this.createAnt();
      this.ants.push(ant);
    }
  }
  //Start the game
  startGame() {
    for (const ant of this.ants) {
      this.drawAnt(ant);
      const intervalId = setInterval(() => {
        this.moveAnt(ant);
      }, 100); //From moving the ant
      this.intervalIds.push(intervalId); // Store interval ID
    }
  }

  // Drawing the ant
  drawAnt(ant) {
    const ant_el = document.createElement("div");
    ant_el.id = ant.id;
    ant_el.classList.add("ant-container");
    ant_el.style.left = ant.x + "px";
    ant_el.style.bottom = ant.y + "px";
    this.mainContainer.appendChild(ant_el);
    //Removing the clicked ant
    const removeAnt = () => {
      console.log("Ant clicked");
      console.log(ant_el);
      this.mainContainer.removeChild(ant_el);
      this.scoreboard();
    };

    ant_el.addEventListener("mousedown", removeAnt);
  }
  //Moving the ant
  moveAnt(ant) {
    const previousAnt = document.getElementById(ant.id);
    ant.x = ant.x + ant.dx;
    ant.y = ant.y + ant.dy;
    this.mainContainer.removeChild(previousAnt);
    this.drawAnt(ant);
    //Checking the collision with the Container
    if (
      ant.x + WIDTH > this.mainContainer.offsetWidth ||
      ant.x < 0 ||
      ant.y + HEIGHT > this.mainContainer.offsetHeight ||
      ant.y < 0
    ) {
      ant.dx *= -1;
      ant.dy *= -1;
    }
    //Check the collision between ants
    this.collision();
  }
  //Generating the random values
  randomIntFromIntervalX() {
    let minX = 0;
    let maxX = this.mainContainer.offsetWidth - WIDTH;
    return Math.floor(Math.random() * (maxX - minX + 1) + minX);
  }

  randomIntFromIntevalY() {
    let minY = 0;
    let maxY = this.mainContainer.offsetHeight - HEIGHT;
    return Math.floor(Math.random() * (maxY - minY + 1) + minY);
  }

  //Collison of Ant checking function
  collision() {
    for (let i = 0; i < this.ants.length; i++) {
      for (let j = i + 1; j < this.ants.length; j++) {
        const ant1 = this.ants[i];
        const ant2 = this.ants[j];

        const dx = ant2.x - ant1.x;
        const dy = ant2.y - ant1.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < WIDTH || distance < HEIGHT) {
          // Reverse the direction of each ant
          ant1.dx *= -1;
          ant1.dy *= -1;
          ant2.dx *= -1;
          ant2.dy *= -1;
          //Rotating the ant
          if (ant1.dx < 0 || ant1.dy < 0) {
            const ant1Id = document.getElementById(ant1.id);
            ant1Id.style.transform = "rotate(180deg)";
          }
          if (ant2.dx < 0 || ant2.dy < 0) {
            const ant2Id = document.getElementById(ant2.id);
            ant2Id.style.transform = "rotate(180deg)";
          }
        }
      }
    }
    // console.log('Collision');
  }
  scoreboard() {
    // Increment the score
    score++;

    this.sideContainer = document.getElementById("side-container");
    let heading = this.sideContainer.querySelector("h1");

    if (!heading) {
      // Create the <h1> element if it doesn't exist
      heading = document.createElement("h1");
      this.sideContainer.appendChild(heading);
    }

    // Update score
    heading.innerText = "Score: " + score;

    if (score === 20) {
      heading.innerText = "GAME OVER ";
      alert("Congratulation you won!");
      Object.assign(this.mainContainer.style, {
        background: `url("bloodKill.svg") no-repeat center`,
        backgroundSize: "300px",
      });
    }
  }
}

// Playing Game:
const game = new AntCrushingGame();
game.init();
