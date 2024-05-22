export function changeDirection(event, velocity) {

  console.log(event);
  console.log(event.keyCode);
  console.log(event.key);

  const LEFT_KEY = 37;
  const RIGHT_KEY = 39;
  const UP_KEY = 38;
  const DOWN_KEY = 40;

  const keyPressed = event.keyCode;

  if (keyPressed === LEFT_KEY && velocity.x !== 1) {
    velocity.x = -1;
    velocity.y = 0;
  }

  if (keyPressed === RIGHT_KEY && velocity.x !== -1) {
    velocity.x = 1;
    velocity.y = 0;
  }

  if (keyPressed === UP_KEY && velocity.y !== 1) {
    velocity.x = 0;
    velocity.y = -1;
  }

  if (keyPressed === DOWN_KEY && velocity.y !== -1) {
    velocity.x = 0;
    velocity.y = 1;
  }
}
