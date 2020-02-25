var contador = 0;

while (contador < 101) {
  console.log("valor del contador", contador);
  contador++;
}

var animales = ["mono", "jabali", "conejo", "serpiente", "perro", "gato"];
console.log("longitud del arreglo", animales.length);

var cantidadElementos = animales.length;

var posicion = 0;

while (posicion < cantidadElementos) {
  console.log("posicion: ", posicion, animales[posicion]);
  posicion++;
}