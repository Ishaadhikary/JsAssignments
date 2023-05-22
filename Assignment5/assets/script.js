startGame = () => {
  const mainContainer = document.getElementById("main-container");
  mainContainer.innerHTML=" ";
  // Creating a div for the road section of the game
  const roadSection = document.createElement("div");
  roadSection.id = "road-section";
  const leftLane = document.createElement("div");
  leftLane.id = "leftLane";
  const centerLane = document.createElement("div");
  centerLane.id = "centerLane";
  const rightLane = document.createElement("div");
  rightLane.id = "rightLane";
  roadSection.append(leftLane);
  roadSection.append(centerLane);
  roadSection.append(rightLane);

  //Creating div for user car
  const userCar = document.createElement("div");
  userCar.id = "userCar";
  roadSection.append(userCar);

  //To Move the user car left and right
  window.addEventListener("keydown", (e) => {
    switch (e.code) {
      case "ArrowLeft":
        if (userCar.style.left <= "75%" && userCar.style.left > "25%") {
          console.log(userCar.style.left);
          moveLeft();
        }
        // console.log("Left Key Pressed")
        break;
      case "ArrowRight":
        if (userCar.style.left < "75%") {
          moveRight();
        }
        break;
    }
  });
  //Moving User Car left
  moveLeft = () => {
    console.log("Left Moving");
    console.log("Left initial:", userCar.style.left);
    const currentPosition = parseFloat(userCar.style.left) || 50;
    console.log("eft cp:", currentPosition);
    const newPosition = currentPosition - 25;
    console.log("Left np:", newPosition);
    userCar.style.left = newPosition + "%";
  };
  //Moving User Car Right
  moveRight = () => {
    console.log("Right Moving");
    console.log("Right initial:", userCar.style.left);
    const currentPosition = parseFloat(userCar.style.left) || 50;
    console.log("Right cp:", currentPosition);
    const newPosition = currentPosition + 25;
    console.log("Right np:", newPosition);
    userCar.style.left = newPosition + "%";
  };

  // Creating div for computer car1
  const car1 = document.createElement("div");
  car1.id = "car1";
  roadSection.append(car1);
  //Creating div for computer car2
  const car2 = document.createElement("div");
  car2.id = "car2";

  //Appending the comupter cars to the screen
  roadSection.append(car1);
  roadSection.append(car2);
  // Initialing the position of the cars for checking collision

  function checkCollision(car, userCar) {
    const carRect = car.getBoundingClientRect();
    const userRect = userCar.getBoundingClientRect();

    return (
      carRect.left < userRect.right &&
      carRect.right > userRect.left &&
      carRect.top < userRect.bottom &&
      carRect.bottom > userRect.top
    );
  }

  //ID to store animation frame
  let animationFrame;
  //Setting the speed of the car
  const moveCar = (car, topPosition) => {
    // Initialing the position of the cars for checking collision
    let initial1 = 0.5 + i * 0.05;
    let initial2 = 0.2 + i * 0.05;
    topPosition += car === car1 ? initial1 : initial2;
    //   console.log(initial1[i], initial2[i]);
    car === car1
      ? (car1.style.top = topPosition + "%")
      : (car2.style.top = topPosition + "%");
    const carElement = car === car1 ? car1 : car2;

    if (checkCollision(carElement, userCar)) {
      console.log("Collision occurred!");
      roadSection.classList.add("carCrash");
      stopGame();
    }

    if (topPosition < 76) {
      animationFrame = requestAnimationFrame(() => moveCar(car, topPosition));
    } else {
      setTimeout(() => moveCar(car, 0), 0);
      countScore();
      i++;
    }
  };

  let i = 0;
  car1.style.top = "0%";
  car2.style.top = "0%";
  car1.style.left = "25%";
  car2.style.left = "75%";
  moveCar(car1, 0);
  moveCar(car2, 0);

  // Creating a div for the Game Update section of the game
  const updateSection = document.createElement("div");
  updateSection.id = "updateSection";

  //ScoreBoard Section
  const scoreboard = document.createElement("div");
  scoreboard.id = "scoreboard";
  let score = 0;
  countScore = () => {
    score++;
    let heading = scoreboard.querySelector("h1");
    if (!heading) {
      // Create the <h1> element if it doesn't exist
      heading = document.createElement("h1");
      scoreboard.appendChild(heading);
    }

    // Update score
    heading.innerText = "Score:" + score;
  };
  countScore();

  //Game Restart section
  const gameRestart = document.createElement("div");
  gameRestart.id = "gameRestart";
  startButton = () => {
    const startBut = document.createElement("button");
    startBut.id = "startButton";
    gameRestart.appendChild(startBut);
    startBut.innerText = "START";
    startBut.style.fontSize = "18px";
    gameRestart.addEventListener("click", () => console.log("Game Started"));
  };
  startButton();
  function stopGame() {
    cancelAnimationFrame(animationFrame); // Replace `animationFrameId` with the actual variable storing the request ID
  
    // Remove event listeners
    window.removeEventListener("keydown", moveLeft);
    window.removeEventListener("keydown", moveRight);
  
    // Reset values
    i = 0;
    score = 0;
    //Reset Road Game Section
    roadSection.removeChild(car1);
    roadSection.removeChild(car2);
    roadSection.removeChild(userCar);
  
    // Display game over message
    const gameOverMessageBox = document.createElement("div");
    gameOverMessageBox.id = "gameOverMessageBox";
    gameOverMessageBox.innerHTML = "Game Over" + "<br>" + "Want to try again?";
    // gameOverMessageBox.textContent = "Game Over";
    const restartButton = document.createElement("button");
    restartButton.id = "restartButton";
    gameOverMessageBox.append(restartButton);
    restartButton.innerText = "RESTART";
    restartButton.style.fontSize = "18px";
    
    restartButton.addEventListener("click", () => startGame());
  
    gameRestart.innerHTML = ""; // Clear the game restart section
    roadSection.appendChild(gameOverMessageBox);
  }
  updateSection.append(scoreboard);
  updateSection.append(gameRestart);

  //Creating the main container for the game and adding all the components to it
  // const mainContainer = document.getElementById("main-container");
  // mainContainer.append(instructionSection);
  mainContainer.append(roadSection);
  mainContainer.append(updateSection);
};

// initialGame= ()=>{
//   const initialBox = document.createElement('div');
//   initialBox.id = "initialBox"
//   initialBox.innerHTM = "Do you want to play the game?"
//   const initialstartButton = document.createElement("button")
//   initialstartButton.id = 'initialstartButton'
//   initialBox.append(initialstartButton);
//   initialstartButton.addEventListener("click", () => startGame());

// }

// initialGame()
startGame()

