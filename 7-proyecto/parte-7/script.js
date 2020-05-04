// ----------------------Globales
// ----------------------Articulos
var articulos = [
  {
  // HotCat
    id: "articulo-001",
    nombre: "gato hot dog",
    precio: 50,
    cover: "gato-hot-dog.png"
  },
  {
  // Cat Burger
    id: "articulo-001",
    nombre : "Cat Burger",
    precio : 40,
    cover : "gato-hamburguesa.png"  
  }
];
//llamamos la función dibujarArticulo esta contiene el arreglo articulos en pa posición cero
for (let i = 0; i < articulos.length; i++) {
  dibujarArticulo(articulos[i]);
}
// función para crear los elementos necesarios pasandole unas variables especificas.
function crearElemento(tipo, contenido, clase, archivoImagen) {
  // creamos elemento y llamamos la variables tipo para saber si es div, img u otro
  var elemento = document.createElement(tipo);
  if (contenido != null) {
    // insertamos el conteido 
    elemento.innerHTML = contenido;
  }
  if (clase != null) {
    elemento.classList.add(clase);
  }
  if (archivoImagen != null) {
    elemento.setAttribute("src", "assets/" + archivoImagen);
  }
  // retornamos la variable elemento 
  return elemento;
}
function dibujarArticulo(articulo) {
  // creamos el vid donde va estar todo lo relacionado con el producto.
  var itemCard = crearElemento("div", null,"item-card", null);
  // creamos el imge y por medio de la variable arctivo llamamos laa propiedad cover donde se encuentra el combre de la ImageBitmapRenderingContext.
  itemCard.appendChild(crearElemento("img", null, "item-cover", articulo.cover));
  // Agregamos el titulo
  itemCard.appendChild(crearElemento("h2", articulo.nombre, null, null));
  // creamos el div para la clase fila
  var filaPrecio = crearElemento("div", null, "fila", null);
  filaPrecio.appendChild(crearElemento("span", "precio", "subtitulo", null));
  filaPrecio.appendChild(crearElemento("span", "$", "precio", null));
  filaPrecio.appendChild(crearElemento("span", articulo.precio, "precio", null));
  itemCard.appendChild(filaPrecio);
  //Creamos el contador
  var filaContador = crearElemento("div", null, "fila", null);
  filaContador.appendChild(crearElemento("span", "cantidad", "subtitulo", null));
  //creamos  para las imagens del contador
  var contador = crearElemento("div", null, "contador", null);
  var numeroContador = crearElemento("span", 1, "cantidad", null);
  var botonMenos = crearElemento("img", null, "boton-menos", "menos.svg");
  var botonMas = crearElemento("img", null, "boton-mas", "mas.svg");
  //Agregamos los eventos a cada Boton 
  botonMenos.addEventListener("click", disminuir.bind(null, numeroContador));
  botonMas.addEventListener("click", incrementar.bind(null, numeroContador));
  contador.appendChild(botonMenos);
  contador.appendChild(numeroContador)
  contador.appendChild(botonMas);
  filaPrecio.appendChild(contador);
  //agregamos todo lo anterior al id principal
  itemCard.appendChild(contador);
  //botón de agregar
  itemCard.appendChild(crearElemento("div", "Agregar", "boton-agregar", null))
  // creamos una variable donde capturamos el id  del vid donde se va pintar todo lo anterior hecho en la variable itemCard
  var contenedorArticulos = document.getElementById("contenedor-articulos");
  contenedorArticulos.appendChild(itemCard);
}

// etiquetas 
var etiquetaSubtotal = document.getElementById("etiqueta-subtotal");
var etiquetaTotal = document.getElementById("etiqueta-total");
var contenedorEtiquetas = document.getElementById("contenedor-etiquetas");
var etiquetaEnvio = document.getElementById("etiqueta-envio");
var etiquetaDescuento = document.getElementById("etiqueta-descuento");

/**
 * Condiciones:
 * Envio Gratis: El envío saldra gratis con compras > a $100.
 * Descuento 10%: El descuento aplica cuando las compras son >= a $500 y de ambos productos.
 */
// Variables
var precioSubtotal = 0;
var referenciaElemento = null;
// envio
var cantidadAcumulada = 0;
var referenciaElemento2 = null;
var cantidadAcumulada2 = 0;
// descuento
var agregadoArticulo1 = false;
var agregadoArticulo2 = false;
var descuento = 0;
// variables capturadas del index
var valorEnvio = document.getElementById("valor-envío");
var valorDescuento = document.getElementById("valor-descuento");

// ----------------------Articulos 1
// capturamos los id de los botonoes del articulo 1
var botonMas = document.getElementById("mas");
var botonMenos = document.getElementById("menos");
var botonAgregar = document.getElementById("agregar");

// obtenemos las etiquetas articulo 1
var cantidad = document.getElementById("cantidad");
var precio1 = document.getElementById("precio1");

// Enlazamos los eventos
botonMas.addEventListener("click", incrementar);
botonMenos.addEventListener("click", disminuir);
botonAgregar.addEventListener("click", agregar);

// ----------------------Funnciones
// creamos las function
function incrementar(referenciaContador) {
  referenciaContador.innerHTML++;
}
function disminuir(referenciaContador) {
  if (referenciaContador.innerHTML > 1) {
    referenciaContador.innerHTML--;
  }
}
function agregar() {
  agregadoArticulo1 = true;
  precioSubtotal += Number(precio1.innerHTML) * Number(cantidad.innerHTML);
  etiquetaSubtotal.innerHTML = precioSubtotal;
  aplicarDescuentos();
  agregarEtiquetaArticulo();
}
function agregarEtiquetaArticulo() {
  var fila = document.createElement("div");
  fila.classList.add("fila");
  var texto = document.createElement("span");
  texto.classList.add("subtitulo");
  cantidadAcumulada += Number(cantidad.innerHTML);
  texto.innerHTML = "Gato HotDog X " + cantidadAcumulada;
  fila.appendChild(texto);
  if (referenciaElemento != null) {
    contenedorEtiquetas.replaceChild(fila, referenciaElemento);
  } else
    contenedorEtiquetas.appendChild(fila);
  referenciaElemento = fila;
}



function aplicarDescuentos() {
  if (precioSubtotal > 100) {
    etiquetaEnvio.style.color = "#4382FF";
    valorEnvio.innerHTML = 0;
  }
  if (agregadoArticulo1 && agregadoArticulo2 && precioSubtotal >= 500) {
    etiquetaDescuento.style.color = "4382FF";
    descuento = precioSubtotal * 0.1;
    valorDescuento.innerHTML = descuento;
  }
  etiquetaTotal.innerHTML = precioSubtotal + Number(valorEnvio.innerHTML) - descuento;
}