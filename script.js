console.log("probando")

const canvas = document.querySelector("#canvas")
canvas.style.backgroundColor = "lightgray"


// paintbrush o herramientas de dibujar
const ctx = canvas.getContext("2d")


// metodos y propiedades de rectangulos

ctx.fillStyle = "green"; // asigna color de relleno


ctx.fillRect(50, 40, 55, 55)
// 1. posicion inicial X
// 2. posicion inicial Y
// 3. ancho del rectangulo
// 4. alto del rectangulo

ctx.fillStyle = "red";
ctx.fillRect(60, 70, 70, 40)

// borrar elementos del canvas
ctx.clearRect(60, 50, 30, 30)
// 1. posicion inicial X
// 2. posicion inicial Ye
// 3. ancho del borrado
// 4. alto del borrado

// borrar todo el canvas
// ctx.clearRect(0, 0, canvas.width, canvas.height)


// metodos y propiedades de trazados

ctx.strokeStyle = "blue" // color de herramientes de trazado

ctx.strokeRect(50, 110, 40, 40)


// trazados complejos

ctx.beginPath() // voy a empezar un trazado

// coordenadar: X, Y
ctx.moveTo(50, 180) // coordenadas a donde empezamos a trazar
ctx.lineTo(90, 195) // coordenadas a donde trazar una linea
ctx.lineTo(50, 210)
ctx.lineTo(40, 260)
ctx.lineTo(20, 190)
ctx.lineTo(50, 180)


ctx.fill() // busca rellenar el ultimo trazado que haya cerrado

ctx.stroke() // realiza una trazado con las indicaciones anteriores

ctx.moveTo(55, 215)
ctx.lineTo(90, 200)

ctx.stroke()

ctx.closePath() // aqui termina el trazado



// trazados con arco
ctx.beginPath()

ctx.strokeStyle = "magenta";

ctx.arc(150, 300, 40, 0, 0.5 * Math.PI, true)
// 1. posicion inicial del centro de la circunferencia X 
// 2. posicion inicial del centro de la circunferencia Y
// 3. radio de la circunferencia
// 4. angulo inicial donde empieza a dibujar
// 5. angulo final donde empieza a dibujar
// 6. sentido opuesto de las agujas del reloj a dibujar (opcional)
ctx.lineTo(150, 300)
ctx.stroke()
ctx.fill()

ctx.closePath()





// Imagenes

let imgDOM = new Image()
imgDOM.src = "https://tinyurl.com/ironhack-pokemons/25.svg";



imgDOM.addEventListener("load", () => {
  // ctx.drawImage(imgDOM, 40, 400, 80, 80)
  ctx.drawImage(imgDOM, 40, 400) // usa la resolucion original del archivo
})
// 1. la imagen
// 2-5 los mismos del fillRect
// NOTA: los dos ultimos argumentos son opcionales


// recursion

// let control = 0;

// function printSomething() {
//   console.log("recursion ocurriendo")
  
//   control++
//   if (control < 100) {
//     printSomething()
//   }
//   // control >= 100; se termina la recursion
// }


// printSomething()


// crear una animacion con recursion y canvas



let controlCube = 0;
let cubePosX = 50;
let cubePosY = 500;

function moveCube() {
  console.log("intentando mover el cubo")

  // 1. limpiar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  // 2. mueve el cubo 1 px a la derecha
  cubePosX = cubePosX + 1
  cubePosY = cubePosY - 1

  // 3. dibujar el elemento
  // ctx.fillRect(cubePosX, 700, 50, 50)
  // imgDOM.addEventListener("load", () => {
    ctx.drawImage(imgDOM, cubePosX, cubePosY) // usa la resolucion original del archivo
  // })


  // 4. efecto de recursion
  controlCube++
  if (controlCube <= 200) {
    // moveCube()
    // animationFrames => controlar una recursion
    // con tasa de refresco de la pantalla 60fps
    requestAnimationFrame(moveCube) // le pasamos es la funcion a invocar
  }
}

moveCube()

