var boton = document.getElementById("boton");
var numeracion = 0;
// agregamos evento para que me ingrese a la function agregarBoton cuando se de click
boton.addEventListener("click", agregarBoton);

function agregarBoton() {
  var botonHijo = document.createElement("div");
  var nombreElemento = "Elemento hijo " + numeracion;

  botonHijo.innerHTML = nombreElemento;
  // creamos una clase para este nuevo boton
  botonHijo.classList.add('botonHijo');

  // creamos un evento que cuando se de click se active la function saludar
  botonHijo.addEventListener("click", saludar.bind(null, nombreElemento));
  document.body.append(botonHijo);
  numeracion++;
}

// funccion de saludar
function saludar(nombre, e){
  console.log("¡Hola! soy " + nombre);
  e.target.style.background = "red";
}