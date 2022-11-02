import React, { useEffect, useRef } from 'react'
import Pocket from './Pocket'
import data from '../../data'
import Balls from './Balls'
import Queue from './Queue'
import { QueueBallMove } from './QueueBallMove'
import WallCollision from './util/WallCollision'
import BallCollisionTest from './util/BallCollisionTest'
import BallCollision from './util/BallCollision'

let pockets = []
let flag = 0
let cls = 1
let tp = 0
let balls = []
let count = 0
let { PocketObj, BallObj, QueueObj } = data
const rePosition = (event) => {
  if (event.keyCode === 40) {
    if (count <= 5) {
      QueueObj.x = QueueObj.x + 10
      count++
    }
  }
  if (event.keyCode === 37) {
    QueueObj.a = (QueueObj.a + Math.PI / 150) % (2 * Math.PI)
  }
  if (event.keyCode === 39) {
    QueueObj.a = QueueObj.a - Math.PI / 150
    if (QueueObj.a <= 0) QueueObj.a = 2 * Math.PI
  }
  if (event.keyCode === 38) {
    if (count > 0) {
      QueueObj.x = QueueObj.x - 10
      count--
    }
  }
  if (event.keyCode === 82) {
    if (count !== -1) {
      QueueObj.x = QueueObj.x - count * 10
    } else {
      QueueObj.x = QueueObj.x + 10
    }
    count = 0
  }
  if (event.keyCode === 83) {
    QueueObj.x = QueueObj.x - (count + 1) * 10
    count = -1
    flag = 1
    cls = 0
  }
  if (event.keyCode === 84) {
    flag = 0
    tp = 0
    console.log(Math.sin(QueueObj.a))
    cls = 1
  }
}

export default function Board() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')

      window.addEventListener('keydown', rePosition)

      let newPocket = Pocket(pockets, canvas, PocketObj)

      let newBall = Balls(balls, canvas, BallObj)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (newPocket && newPocket.length > 0) {
        pockets = newPocket
      }

      if (newBall && newBall.length > 0) {
        balls = newBall
      }

      pockets.forEach((pocket) => {
        return pocket.draw(ctx)
      })
      balls.forEach((ball) => {
        return ball.draw(ctx)
      })
      let ball
      let testBall
      for (let i = 0; i < balls.length; i++) {
        ball = balls[i]
        for (let j = i + 1; j < balls.length; j++) {
          testBall = balls[j]
          if (BallCollisionTest(ball, testBall)) {
            BallCollision(ball, testBall)
            console.log(ball, testBall)
          }
        }
      }
      for (let i = 0; i < balls.length; i++) {
        WallCollision(balls[i], canvas)
      }
      if (QueueObj.a >= Math.PI && QueueObj.a < 1.5 * Math.PI)
        tp = QueueObj.a - Math.PI

      if (QueueObj.a >= 1.5 * Math.PI && QueueObj.a < 2 * Math.PI)
        tp = QueueObj.a + Math.PI

      if (QueueObj.a >= 0 && QueueObj.a < 0.5 * Math.PI)
        tp = QueueObj.a + Math.PI

      if (QueueObj.a >= 0.5 * Math.PI && QueueObj.a < 1 * Math.PI)
        tp = QueueObj.a - Math.PI
      QueueBallMove(ctx, balls[0], flag, tp)
      Queue(ctx, canvas, QueueObj, balls[0], cls)

      requestAnimationFrame(render)
    }
    render()
    return () => {
      window.removeEventListener('keydown', rePosition)
    }
  }, [])

  return <canvas id='canvas' ref={canvasRef} height='600px' width='1200px' />
}
