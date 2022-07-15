var outputDisplay = document.getElementById('output')
var output

document.addEventListener('keydown', keyCode)

function keyCode(e) {
  output = e.keyCode
  outputDisplay.innerText = `${output}`
  console.log('executed')
}
