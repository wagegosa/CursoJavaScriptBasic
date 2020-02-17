// operador +
var precioManza = 5;
var precioNaranja = 4;
var precioTotal = precioManza + precioNaranja;
console.log("1.0: Preciode manzana y naranja sumados en la variable precioTotal.");
console.log("1.1: precio total:", precioTotal);
console.log("2.0: Preciode manzana y naranja sumados de las dos variables.");
console.log("2.1: precio total:", precioManza + precioNaranja);

// operador -
var descuento = 3;
var precioFinal = 10;
var precioConDescuento = precioFinal - descuento;
console.log("3: precio final con descuento:", precioConDescuento);

// operador /
var premio = 100000;
var ganadores = 4;
var premioPorPersona = premio / ganadores;
console.log("4.0: El valor del premio es de:", premio );
console.log("4.1: La cantidad de ganadores es de:", ganadores);
console.log("4.2: cada ganador recibira:", premioPorPersona);

// operador *
var precioServicio = 100;
var porcentajeDescuento = 0.2;
var cantidadDescuento = precioServicio * porcentajeDescuento;
console.log("5.0: El precio del servicio es de:", precioServicio);
console.log("5.1: El porcentaje de descuento es de :", porcentajeDescuento =porcentajeDescuento * 100);
console.log("5.2: Valor del servicio con el descuento es de:", cantidadDescuento = precioServicio - porcentajeDescuento);

// console.log("6:$", 100);

// concatenar palabras con el operador +
console.log("7: $" + [1, 2, 3]);

var persona = {
  nombre: "Bruce",
  apellido: "Wayne."
};
console.log("8.0: Cuando se llama solo el objeto solo muetra:" + persona);
console.log("8.1: En cambio se llamamos a las propiedades del objeto muesta:");
console.log("8.1: persona es: " + persona.nombre + " " + persona.apellido);

console.log("9.0: true es 1 y le sumamos uno y el");
console.log("9.1: resultado: ", 1 + true + " hola mundo!");

// operadores / y * se aplican primero en el orden izquierda-derecha
// despues los operadores + y - en el orden izquierda-derecha
console.log("10:", 2 + (5 * 4) / 10 - 1);
console.log("11:", 10 - (8 / 2) * 2 + 2);