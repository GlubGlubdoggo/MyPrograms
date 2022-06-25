//creation variables
var rect2Color = ballColors[bcc]
var rect2Width = 50
var rect2Height = 50
var rect2X = Math.floor(Math.random()*(canvas.width-rect2Width))
var rect2Y = Math.floor(Math.random()*(canvas.height-rect2Height))
var rect2MovementX = -3
var rect2MovementY = -3

//define rect2
class Rect2 {
  constructor() {
    this.draw = function() {
      ctx.strokeStyle = 'black'
      ctx.fillStyle = rect2Color
      ctx.fillRect(rect2X, rect2Y, rect2Width, rect2Height)
      ctx.strokeRect(rect2X, rect2Y, rect2Width, rect2Height)
    }
  }
}

//make rect2
var rect2 = new Rect2()

//loop
function updateEvenMoreThanEverBefore() {
  rect2.draw()
  rect2X += rect2MovementX
  rect2Y += rect2MovementY
  if (rect2Y > canvas.height - rect2Height || rect2Y + rect2MovementY < 0) {
    rect2MovementY = -rect2MovementY
  } else if (rect2X > canvas.width - rect2Width || rect2X + rect2MovementX < 0) {
    rect2MovementX = -rect2MovementX
  }
}

//now loop
setInterval(updateEvenMoreThanEverBefore, 10)
