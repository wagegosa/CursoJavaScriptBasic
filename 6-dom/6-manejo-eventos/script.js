// Capturamos el id del div
var boton = document.getElementById("boton");
// creamos una function la cual nos va imprimir en consola un Hola Mundo
function saludar(){
  console.log("¡Hola Mundo!...");
}
// llamamos a la variable "boton" y le agregamos una evento el cual ejecuta la function "saludar()" si se realiza un click.
boton.addEventListener("click", saludar);
// Cambair el color del botón
// primero creamos y declaramos una variable como false
var esRojo = false;
// creamos una funcción  y la llamoos  cambairColor 
// function cambiarColor(){
//   // preguntamos si esRojo es false o true
//   if (esRojo) {
//     // llamamos al boton para cambiarle el estilo y el color a verde y cambiarle de estado a la variable a false
//     boton.style.background = "green";
//     esRojo = false;
//   } else {
//     // llamamos al boton para cambiarle el estilo y el color a rojo y cambiarle de estado a la variable a false
//     boton.style.background = "red";
//     esRojo = true;
//   }
// }
// otra forma para realizar la funcción es con un evento
function cambiarColor(e){
  // preguntamos si esRojo es false o true
  if (esRojo) {
    // llamamos al boton para cambiarle el estilo y el color a verde y cambiarle de estado a la variable a false
    e.target.style.background = "green";
    esRojo = false;
  } else {
    // llamamos al boton para cambiarle el estilo y el color a rojo y cambiarle de estado a la variable a false
    e.target.style.background = "red";
    esRojo = true;
  }
}
// mediante el boton agregamos un evento cuando se realice un click y llame a la funcción cambiarColor
// boton.addEventListener("click", cambiarColor);
boton.addEventListener("dblclick", cambiarColor);

// agregar un parrafo en el body cabavez que damos click
var body = document.body;

function agregarParrafo() {
  var parrafo = document.createElement("p");
  parrafo.innerHTML = "Parrafo nuevo";
  body.appendChild(parrafo);
}

boton.addEventListener("click", agregarParrafo);