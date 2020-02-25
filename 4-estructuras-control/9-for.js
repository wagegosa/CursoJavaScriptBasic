/*
var contador;
console.log("Recordemos que contdor inicia en cero (0).");
for (contador = 0; contador < 10; contador++) {
   console.log("El valor del contador es de: ", contador);
}

//Podemos imprimir los arreglos ya sean enteros o alfanummericos , por ejemplo: 
var numeros = [2, 4, 6, 8, 10, "prueba"];

for (var i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}
*/
var productos = [
  { nombre: "PS4", precio: 250 },
  { nombre: "iPhone X", precio: 800 },
  { nombre: "Laptop", precio: 300 },
  { nombre: "TV", precio: 200 },
  { nombre: "NetFlix", precio: 5 },
  { nombre: "Carro", precio: 500 }
];

var productosConDescuento = [];

// buscar productos que tienen descuento y meterlos a otro arreglo
console.log("Imprimimos primero los nombre y valores de los productos: ");

for (var i = 0; i < productos.length; i++) {
   console.log(productos[i]);

  // regla para aplicar descuento
  if (productos[i].precio >= 300) {
    productosConDescuento.push(productos[i]);//El push agrega o actualiza en el arreglo.
  }
}
console.log("La cantidad de productos con descuento son: ", productosConDescuento.length);
console.log("productos con descuento son: ", productosConDescuento);


