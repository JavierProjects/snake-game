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

// Handle keyboard input
document.addEventListener("keydown", changeDirection);
pushButton.addEventListener("click", function() {
  console.log("Push");
});

function changeDirection(event) {

  console.log(event);
  console.log(event.keyCode);
  console.log(event.key);
  

const LEFT_KEY = 37;
const RIGHT_KEY = 39;
const UP_KEY = 38;
const DOWN_KEY = 40;

const keyPressed = event.keyCode;

if (keyPressed === LEFT_KEY && velocity.x !== 1) {
  velocity = { x: -1, y: 0 };
}

if (keyPressed === RIGHT_KEY && velocity.x !== -1) {
  velocity = { x: 1, y: 0 };
}

if (keyPressed === UP_KEY && velocity.y !== 1) {
  velocity = { x: 0, y: -1 };
}

if (keyPressed === DOWN_KEY && velocity.y !== -1) {
  velocity = { x: 0, y: 1 };
}
}

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

  // Check for collisions with the fruit
  if (head.x === fruit.x && head.y === fruit.y) {
    // Increase the score
    // Generate new fruit position
    // Don't remove the tail segment
  } else {
    snake.pop();
  }

  // Check for collisions with the snake's body
  for (let i = 1; i < snake.length; i++) {
    if (snake[i].x === head.x && snake[i].y === head.y) {
      gameOver();
      return;
    }
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
  // Reset the game state
}

// Game loop
function gameLoop() {
  update();
  draw();
}

// Start the game loop
// setInterval(gameLoop, 100);
gameLoop();




