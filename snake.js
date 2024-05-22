// import functions
import { changeDirection } from './changeDirection.js';

// Define the canvas and its rendering context
const canvas = document.getElementById("gameCanvas");
const pushButton = document.getElementById("pushButton");
const context = canvas.getContext("2d");

// // Define the size of each grid cell
const gridSize = 20;
const canvasSize = 400;
const gridCount = canvasSize / gridSize;

// // Define the initial position and velocity of the snake
let snake = [
  { x: 5, y: 5 },
  { x: 4, y: 5 },
  { x: 3, y: 5 },
  { x: 2, y: 5 },
  { x: 1, y: 5 },
  { x: 0, y: 5 }
];

let velocity = { x: 1, y: 0 };

// Define the position of the fruit
let fruit = { x: 10, y: 10 };

let score = 0;

// Handle keyboard input
document.addEventListener("keydown", (event) => changeDirection(event, velocity));
pushButton.addEventListener("click", function() {
  console.log("Push");
});


// Update the game state
function update() {
  // Move the snake
  const head = { x: snake[0].x + velocity.x, y: snake[0].y + velocity.y };
  snake.unshift(head);

  // Check for collisions with the walls
  if (
    head.x < 0 ||
    head.x >= gridCount ||
    head.y < 0 ||
    head.y >= gridCount
  ) {
    gameOver();
    return;
  }

  // Check for collisions with the snake's body
  for (let i = 1; i < snake.length; i++) {
    if (snake[i].x === head.x && snake[i].y === head.y) {
      gameOver();
      return;
    }
  }

  // Check for collisions with the fruit
  if (head.x === fruit.x && head.y === fruit.y) {
    // Increase the score
    score += 1;
    // Generate new fruit position
    // Don't remove the tail segment
  } else {
    snake.pop();
  }
}

// // Render the game state
function draw() {
  // Clear the canvas
  context.clearRect(0, 0, canvasSize, canvasSize);

  // Draw the snake
  context.fillStyle = "green";
  snake.forEach(segment => {
    context.fillRect(
      segment.x * gridSize,
      segment.y * gridSize,
      gridSize,
      gridSize
    );
  });

  // Draw the fruit
  context.fillStyle = "red";
  context.fillRect(
    fruit.x * gridSize,
    fruit.y * gridSize,
    gridSize,
    gridSize
  );
}

// Game over logic
function gameOver() {
  // Display game over message and score
  
  // Create a game over element
  const gameOverElement = document.createElement("div");
  gameOverElement.classList.add("game-over");
  gameOverElement.textContent = `Game Over! Your score: ${score}`;

  // Append the game over element to the page
  document.body.appendChild(gameOverElement);
  
  // Reset the game state
  resetGame() 

}

// Game loop
function gameLoop() {
  update();
  draw();
}

function resetGame() {
  // Reset the snake
  snake = [
    { x: 5, y: 5 },
    { x: 4, y: 5 },
    { x: 3, y: 5 },
    { x: 2, y: 5 },
    { x: 1, y: 5 },
    { x: 0, y: 5 }
  ];

  // Reset the fruit
  fruit = { x: 10, y: 10 };

  // Reset the velocity
  velocity = { x: 1, y: 0 };

  score = 0;
}
// Start the game loop
setInterval(gameLoop, 100);
// gameLoop();




