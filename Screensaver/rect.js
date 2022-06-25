//creation variables
var rectColor = ballColors[bcc]
var rectWidth = 100
var rectHeight = 100
var rectX = Math.floor(Math.random()*(canvas.width-rectWidth))
var rectY = Math.floor(Math.random()*(canvas.height-rectHeight))
var rectMovementX = 3
var rectMovementY = -3

//define rect
class Rect {
  constructor() {
    this.draw = function() {
      ctx.strokeStyle = 'black'
      ctx.fillStyle = rectColor
      ctx.fillRect(rectX, rectY, rectWidth, rectHeight)
      ctx.strokeRect(rectX, rectY, rectWidth, rectHeight)
    }
  }
}

//make rect
var rect = new Rect()

//loop
function updateEvenMORE() {
  rect.draw()
  rectX += rectMovementX
  rectY += rectMovementY
  if (rectY > canvas.height - rectHeight || rectY + rectMovementY < 0) {
    rectMovementY = -rectMovementY
  } else if (rectX > canvas.width - rectWidth || rectX + rectMovementX < 0) {
    rectMovementX = -rectMovementX
  }
}

//now loop
setInterval(updateEvenMORE, 10)
