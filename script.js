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
