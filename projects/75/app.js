const logger = document.querySelector('h3')

document.addEventListener('mousemove', e => {
  let x = e.offsetX
  let y = e.offsetY
  logger.textContent = `X: ${x}, Y: ${y}`
  console.log('Mouse Coords:', x, y)
})