console.log("probando hacer pong")

// - configuracion de canvas
const canvas = document.querySelector("#canvas");
canvas.style.backgroundColor = "black";
const ctx = canvas.getContext("2d")

// - variables globales
let ballX = 50;
let ballY = 50;
let ballRadius = 20;
let isBallGoingRight = true;
let isBallGoingDown = true;
let ballSpeed = 4;


// - funciones
const drawBall = () => {
  ctx.beginPath()
  ctx.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI)
  // ctx.strokeStyle = "magenta";
  // ctx.stroke();
  ctx.fillStyle = "white";
  ctx.fill()
  ctx.closePath()
}

const moveBall = () => {
  if (isBallGoingRight === true) {
    ballX += ballSpeed
  } else {
    ballX -= ballSpeed
  }
  if (isBallGoingDown === true) {
    ballY += ballSpeed
  } else {
    ballY -= ballSpeed
  }
}

const colissionBallWall = () => {
  // la posicion de la pelotita X deberia ser menor CW
  if (ballX > canvas.width - ballRadius) {
    console.log("pelotita colision pared derecha")
    // la pelotita deberia empezar a moverse a la izquierda.  -- en la posX
    isBallGoingRight = false;
  }

  if (ballY > canvas.height - ballRadius) {
    isBallGoingDown = false;
  }

  if (ballX < 0 + ballRadius) {
    isBallGoingRight = true;
  }

  if (ballY < 0 + ballRadius) {
    isBallGoingDown = true;
  }
}


// - funcion de recursion
const gameLoop = () => {
  // console.log("juego andando")

  // 1. limpiar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  // 2. movimiento y acciones de todos los elementos
  moveBall()
  colissionBallWall()

  
  // 3. dibujado de todos los elementos
  drawBall()


  // 4. recursion
  requestAnimationFrame(gameLoop)

}


// - addEventListeners
window.addEventListener("load", gameLoop)