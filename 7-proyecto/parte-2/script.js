// capturamos los id de los botonoes

var botonMas = document.getElementById("mas");
var botonMenos = document.getElementById("menos");
var botonAgregar = document.getElementById("agregar");

// obtenemos las etiquetas 
var cantidad = document.getElementById("cantidad");
var precio1 = document.getElementById("precio1");
var etiquetaSubtotal = document.getElementById("etiqueta-subtotal");
var etiquetaTotal = document.getElementById("etiqueta-total");

// constantes
var precioSubtotal = 0;
var costoEnvio = 5;
// Enlazamos los eventos
botonMas.addEventListener("click", incrementar);
botonMenos.addEventListener("click", disminuir);
botonAgregar.addEventListener("click", agregar);
// creamos las function
function incrementar() {
 cantidad.innerHTML++;
}
function disminuir(){
  if (cantidad.innerHTML > 1) {
    cantidad.innerHTML--;
  }
}
function agregar(){
  // console.log(Number(precio1.innerHTML) * Number(cantidad.innerHTML));
  precioSubtotal += Number(precio1.innerHTML) * Number(cantidad.innerHTML);
  etiquetaSubtotal.innerHTML = precioSubtotal;
  etiquetaTotal.innerHTML = precioSubtotal + costoEnvio;
}