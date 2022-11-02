export default function BallCollisionTest(ball1, ball2) {
  let retval = false
  let dx = ball1.x - ball2.x
  let dy = ball1.y - ball2.y
  let distance = dx * dx + dy * dy
  if (
    distance <=
    (ball1.radius + ball2.radius) * (ball1.radius + ball2.radius) - 5
  ) {
    retval = true
  }
  return retval
}
