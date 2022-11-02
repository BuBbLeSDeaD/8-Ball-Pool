export default function WallCollision(ballObj, canvas) {
  if (
    ballObj.y - ballObj.radius <= 0 ||
    ballObj.y + ballObj.radius >= canvas.height
  ) {
    ballObj.dy = ballObj.dy * -1
    ballObj.day = ballObj.day * -1
  }
  if (
    ballObj.x - ballObj.radius <= 0 ||
    ballObj.x + ballObj.radius >= canvas.width
  ) {
    ballObj.dx = ballObj.dx * -1
    ballObj.dax = ballObj.dax * -1
  }
}
