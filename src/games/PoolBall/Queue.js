export default (ctx, canvas, QueueObj, QueueBall, cls) => {
  class Queue {
    constructor(x, y, a) {
      this.x = x
      this.y = y
      this.a = a
      this.height = 6
      this.width = 200
      this.color = 'brown'
    }
    move() {
      ctx.beginPath()
      ctx.save()
      ctx.translate(QueueBall.x, QueueBall.y)
      ctx.rotate(this.a)
      ctx.rect(this.x, this.y, this.width, this.height)
      ctx.translate(-QueueBall.x, -QueueBall.y)
      if (cls === 1) {
        ctx.fillStyle = 'brown'
      } else {
        ctx.fillStyle = 'green'
      }
      ctx.fill()
      ctx.restore()
    }
  }
  let queue = new Queue(QueueObj.x, QueueObj.y, QueueObj.a)
  queue.move()
}
