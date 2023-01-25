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

let paddleX = 200;
let paddleY = 700;
let paddleWidth = 150;
let paddleHeight = 30;
let paddleSpeed = 30;

let isGameOn = true;


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
    // console.log("pelotita colision pared derecha")
    // la pelotita deberia empezar a moverse a la izquierda.  -- en la posX
    isBallGoingRight = false;
  }

  if (ballY > canvas.height - ballRadius) {
    // isBallGoingDown = false;
    // detener la recursion del juego => GAME OVER
    isGameOn = false;
  }

  if (ballX < 0 + ballRadius) {
    isBallGoingRight = true;
  }

  if (ballY < 0 + ballRadius) {
    isBallGoingDown = true;
  }
}

const drawPaddle = () => {
  ctx.fillStyle = "white";
  ctx.fillRect(paddleX, paddleY, paddleWidth, paddleHeight)
}

const movePaddle = (event) => {
  // console.log(event.code)
  if (event.code === "ArrowLeft") {
    paddleX -= paddleSpeed
  }
  if (event.code === "ArrowRight") {
    paddleX += paddleSpeed
  }
}

const colissionBallPaddle = () => {
  if (ballY > paddleY && ballX > paddleX && ballX < (paddleX + paddleWidth)) {
    // console.log("ha colisionado con la paleta")
    isBallGoingDown = false;
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
  colissionBallPaddle()

  
  // 3. dibujado de todos los elementos
  drawBall()
  drawPaddle()


  // 4. recursion
  if (isGameOn === true) {
    requestAnimationFrame(gameLoop)
  }

}


// - addEventListeners
window.addEventListener("load", gameLoop)

window.addEventListener("keydown", movePaddle)

