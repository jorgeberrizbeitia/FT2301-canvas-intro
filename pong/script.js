console.log("probando hacer pong")

// - configuracion de canvas
const canvas = document.querySelector("#canvas");
canvas.style.backgroundColor = "black";
const ctx = canvas.getContext("2d")

// - variables globales
let ballX = 50;
let ballY = 50;


// - funciones
const drawBall = () => {
  ctx.beginPath()
  ctx.arc(ballX, ballY, 15, 0, 2 * Math.PI)
  // ctx.strokeStyle = "magenta";
  // ctx.stroke();
  ctx.fillStyle = "white";
  ctx.fill()
  ctx.closePath()
}



// - funcion de recursion
const gameLoop = () => {
  // console.log("juego andando")

  // 1. limpiar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  // 2. movimiento y acciones de todos los elementos
  ballX++
  ballY++

  
  // 3. dibujado de todos los elementos
  drawBall()


  // 4. recursion
  requestAnimationFrame(gameLoop)

}


// - addEventListeners
window.addEventListener("load", gameLoop)