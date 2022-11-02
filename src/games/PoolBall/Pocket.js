export default function Pocket(pockets, canvas, pocket) {
  let newPockets = []

  if (pockets.length >= 6) {
    return
  }

  for (let i = 0; i < 6; i++) {
    let newPocket = new SinglePocket(
      pocket.x,
      pocket.y,
      pocket.radius,
      pocket.color
    )
    newPockets.push(newPocket)

    pocket.x = pocket.x + 590
    if (pocket.x > canvas.width - 10) {
      pocket.x = 10
      pocket.y = pocket.y + 580
    }
  }
  console.log(newPockets)
  return newPockets
}

class SinglePocket {
  constructor(x, y, r, c) {
    this.x = x
    this.y = y
    this.radius = r
    this.color = c
  }
  draw(ctx) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
    ctx.fillStyle = this.color
    ctx.strokeStyle = 'red'
    ctx.lineWidth = 5
    ctx.stroke()
    ctx.fill()
  }
}
