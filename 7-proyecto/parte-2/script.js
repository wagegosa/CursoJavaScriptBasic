// capturamos los id de los botonoes

var botonMas = document.getElementById("mas");
var botonMenos = document.getElementById("menos");
var botonAgregar = document.getElementById("agregar");

// obtenemos las etiquetas 
var cantidad = document.getElementById("cantidad");
var presio1 = document.getElementById("presio1");
var EtiquetaSubtotal = document.getElementById("etiqueta-subtotal");
var EtiquetaTotal = document.getElementById("etiqueta-total");

// constantes
var precioSubtotal = 0;
var costoEnvio = 0;
// Enlazamos los eventos
botonMas.addEventListener("click", incrementar);
botonMenos.addEventListener("click", disminuir);
// creamos las function
function incrementar() {
 cantidad.innerHTML++;
}
function disminuir(){
  if (cantidad.innerHTML > 1) {
    cantidad.innerHTML--;
  }
}