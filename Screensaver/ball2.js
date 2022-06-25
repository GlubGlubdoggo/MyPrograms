//ball creation variables
var ball2Radius = 30
var ball2X = Math.floor(Math.random()*(canvas.width-ball2Radius))
var ball2Y = Math.floor(Math.random()*(canvas.height-ball2Radius))
var movementX2 = -3
var movementY2 = -3
var ball2Color = ballColors[bcc]

//define circle2
class Circle2 {
  constructor(angle1, angle2) {
    this.angle1 = angle1
    this.angle2 = angle2
    
    this.draw = function() {
      ctx.strokeStyle = 'black'
      ctx.fillStyle = ball2Color
      ctx.arc(ball2X,ball2Y,ball2Radius,angle1,angle2)
      ctx.fill()
      ctx.stroke()
    }
  }
}

//make circle2
var ball2 = new Circle2(30, 60)


//loop
function updateMore() {
  ctx.beginPath()
  ball2.draw()
  ball2X += movementX2
  ball2Y += movementY2
  
  if (ball2Y > canvas.height - ball2Radius || ball2Y + movementY2 < 0 + ball2Radius) {
    movementY2 = -movementY2
  } else if (ball2X > canvas.width - ball2Radius || ball2X + movementX2 < 0 + ball2Radius) {
    movementX2 = -movementX2
  }
}

//now loop
setInterval(updateMore, 10)
