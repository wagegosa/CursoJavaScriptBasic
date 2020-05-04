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
    id: "articulo-002",
    nombre : "Cat Burger",
    precio : 40,
    cover : "gato-hamburguesa.png"  
  },
  {
  // Cat taco
    id: "articulo-003",
    nombre : "Cat Taco",
    precio : 45,
    cover : "cat-taco.jpg"  
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
  var botonAgregar = crearElemento("div", "Agregar", "boton-agregar", null);
  botonAgregar.addEventListener("click", agregar.bind(null, articulo, numeroContador));
  itemCard.appendChild(botonAgregar);

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
// descuento
var descuento = 0;
// variables capturadas del index
var valorEnvio = document.getElementById("valor-envío");
var valorDescuento = document.getElementById("valor-descuento");

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
function agregar(articulos, referenciaContador) {
  //marca cuando este tipo de articulo ya fue agregado
  articulos.agregar = true;
  precioSubtotal += Number(articulos.precio) * Number(referenciaContador.innerHTML);
  etiquetaSubtotal.innerHTML = precioSubtotal;
  if (precioSubtotal > 100) {
    etiquetaEnvio.style.color = "#4382FF";
    valorEnvio.innerHTML = 0;
  }
  agregarEtiquetaArticulo(articulos, referenciaContador);
  var aplicarDescuento = corroborarDescuento();

  if(aplicarDescuento && precioSubtotal > 500){
    etiquetaDescuento.style.color = "4382FF";
    descuento = precioSubtotal * 0.1;
    valorDescuento.innerHTML = descuento;
  }
  etiquetaTotal.innerHTML = precioSubtotal + Number(valorEnvio.innerHTML) - descuento;
  referenciaContador.innerHTML = 1;
}
function agregarEtiquetaArticulo(articulos, referenciaContador) {
  var fila = crearElemento("div", null, "fila", null);
  if(articulos.cantidadAcumulada == null){
    articulos.cantidadAcumulada = Number(referenciaContador.innerHTML);
  }else{
    articulos.cantidadAcumulada += Number(referenciaContador.innerHTML);
  }
  var texto = crearElemento("span", articulos.nombre + " * " + articulos.cantidadAcumulada, "subtitulo", null);
  fila.appendChild(texto);
  if (articulos.referenciaArticulo == null) {
    contenedorEtiquetas.appendChild(fila);
  } else {
    contenedorEtiquetas.replaceChild(fila, articulos.referenciaArticulo);
  }
  articulos.referenciaArticulo = fila;

}
function corroborarDescuento(){
  var cantidadTipoArticulos = 0;
  for (let i = 0; i < articulos.length; i++) {
    if(articulos[i].agregar)
      cantidadTipoArticulos ++;
  }
  if (cantidadTipoArticulos >= 2) {
    return true;
  }else{
    return false;
  }
}