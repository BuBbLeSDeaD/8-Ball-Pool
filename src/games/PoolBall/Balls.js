export default function Balls(balls, canvas, ball) {
  let newBalls = []
  let c = 0

  if (balls.length >= 16) {
    return
  }

  for (let i = 0; i < 6; i = i + 1) {
    if (i === 0) {
      let newBall = new SingleBall(
        ball.x,
        ball.y,
        ball.radius,
        ball.color,
        ball.dx,
        ball.dy,
        ball.dax,
        ball.day
      )
      newBalls.push(newBall)
      c++
    }
    if (i === 1) {
      ball.x = 800
      ball.color = 'red'
      let newBall = new SingleBall(
        ball.x,
        ball.y,
        ball.radius,
        ball.color,
        ball.dx,
        ball.dy,
        ball.dax,
        ball.day
      )
      newBalls.push(newBall)
      c++
    } else {
      ball.x = ball.x + 34.64
      ball.y = ball.y - 20 * (i - 1)
      for (let j = 1; j < i + 1; j = j + 1) {
        if (c === 5) ball.color = 'black'
        else if (c % 2 === 1) ball.color = 'red'
        else if (c % 2 === 0) ball.color = 'yellow'
        let newBall = new SingleBall(
          ball.x,
          ball.y,
          ball.radius,
          ball.color,
          ball.dx,
          ball.dy,
          ball.dax,
          ball.day
        )
        newBalls.push(newBall)
        ball.y = ball.y + 40
        c++
      }
      ball.y = 300
    }
  }
  return newBalls
}

class SingleBall {
  constructor(x, y, r, c, dx, dy, dax, day, flag) {
    this.x = x
    this.y = y
    this.radius = r
    this.color = c
    this.dx = dx
    this.dy = dy
    this.dax = dax
    this.day = day
  }
  draw(ctx) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
    ctx.fillStyle = this.color
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 2
    ctx.stroke()
    ctx.fill()
  }
}
