export default function BallCollision(ballA, ballB) {
  console.log(ballA, ballB)
  let v = Math.sqrt(ballA.dx * ballA.dx + ballA.dy * ballA.dy)
  let a = Math.atan((ballB.y - ballA.y) / (ballB.x - ballA.x))
  console.log(a)
  ballB.dx = Math.cos(a) * v
  ballB.dax = Math.cos(a) * 0.01
  ballB.dy = Math.sin(a) * v
  ballB.day = Math.sin(a) * 0.01
  while (ballB.dx >= 0) {
    ballB.x = ballB.x + ballB.dx
    ballB.dx = ballB.dx - ballB.dax
    ballB.y = ballB.y + ballB.dy
    ballB.dy = ballB.dy - ballB.day
  }
}
