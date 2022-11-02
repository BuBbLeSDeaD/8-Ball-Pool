let c = 0
export function QueueBallMove(ctx, ballObj, flag, a) {
  let data = new Ball(
    ballObj.x,
    ballObj.y,
    ballObj.radius,
    ballObj.dx,
    ballObj.dy,
    ballObj.dax,
    ballObj.day
  )
  if (ballObj.dx !== 0 || ballObj.dy !== 0) data.draw(ctx)
  if (flag === 1) {
    if (c > 500) {
      ballObj.dx = 0
      ballObj.dy = 0
    } else {
      ballObj.x += ballObj.dx
      ballObj.dx = ballObj.dx - ballObj.dax
      ballObj.y += ballObj.dy
      ballObj.dy = ballObj.dy - ballObj.day
    }
    c = c + 1
  } else {
    ballObj.dx = 5 * Math.cos(a)
    ballObj.dy = 5 * Math.sin(a)
    ballObj.dax = 0.01 * Math.cos(a)
    ballObj.day = 0.01 * Math.sin(a)
    c = 0
  }
}

class Ball {
  constructor(x, y, rad) {
    this.x = x
    this.y = y
    this.radius = rad
  }

  draw(ctx) {
    ctx.beginPath()
    ctx.fillStyle = 'white'
    ctx.arc(this.x, this.y, this.rad, 0, 2 * Math.PI)
    ctx.strokeStyle = 'black'
    ctx.strokeWidth = '4'
    ctx.fill()
    ctx.stroke()
  }
}
