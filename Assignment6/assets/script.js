class FlappyBirdGame {
  constructor() {
    this.container = document.getElementById("container");
    this.instruction = document.querySelector(".instruction");
    this.playButton = document.querySelector(".playButton");
    this.topPillars = []; //Add all the top pillars to the array
    this.bottomPillars = []; //Add all the bottom pillars to the array
    this.topPillar = null;
    this.bottomPillar=null;
  }
  init() {
    console.log("Test")
    this.createPillars();
    this.initializeGame(); 
    requestAnimationFrame(this.animatePillars.bind(this));
    // this.startGame();
    // this.endGame();
  }
  createPillars() {
    console.log("Creation of pillars");
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

    //Adding all the bottom pillars to the Array
    for (let i = 0; i < 8; i++) {
      this.topPillar = document.createElement("img");
      this.bottomPillar = document.createElement("img");
      this.bottomPillar.src = this.bottomPillars[i];
      this.topPillar.src = this.topPillars[i];
      this.topPillar.style.position = "absolute";
      this.bottomPillar.style.position = "absolute";
      this.topPillar.style.top = 0;
      this.bottomPillar.style.bottom = 95 + "px";
      this.topPillar.style.left = currentPosition + "px";
      this.bottomPillar.style.left = currentPosition + "px";
      currentPosition+=248;
      this.container.append(this.topPillar);
      this.container.append(this.bottomPillar)
    }

  }
  initializeGame() {
    console.log("Initial Page here");
  }
  animatePillars() {
    const pillars = this.container.querySelectorAll("img");
    pillars.forEach((pillar) => {
      const left = parseInt(pillar.style.left);
      pillar.style.left = left - 1 + "px"; 
    });
    requestAnimationFrame(this.animatePillars.bind(this));
    
  }
}
const flappyBird = new FlappyBirdGame();
flappyBird.init();
