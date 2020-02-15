var animales = ["lobo", "leon", "dragon"];
console.log("1.0: arreglo de animales", animales);

console.log("1.1: imprimir un elemento en especifico", animales[0]);
console.log("1.2: imprimir un elemento en especifico", animales[1]);
console.log("1.3: imprimir un elemento en especifico", animales[2]);

// // actualizar contenido
animales[0] = "ciervo";
console.log("2: contenido actualizado", animales[0]);

var numeros = [1, 2, 3];
console.log("3: arreglo de numeros", numeros);

var arregloMixto = [1, "perro", true];
console.log("4: arreglo mixto", arregloMixto);

var usuarios = [
  // objeto 1
  {
    nombre: "jorge",
    edad: 18
  },
  // objeto 2
  {
    nombre: "joel",
    edad: 26
  },
  // objeto 3
  {
    nombre: "juan",
    edad: 32
  }
];
console.log("5: arreglo de objetos", usuarios);

var usuarios = [
  // objeto 1
  {
    nombre: "jorge",
    edad: 18,
    tieneHijos: false
  },
  // objeto 2
  {},
  // objeto 3
  {
    nombre: "juan",
    edad: 32
  }
];

console.log("6.0: arreglo de objetos con diferentes estructuras:", usuarios);
console.log(
  "6.1: acceder a la propiedad nombre del elemento en la posicion 0:",
   usuarios[0].nombre
);
console.log(
  "6.2: acceder a la propiedad edad del elemento en la posicion 0:",
   usuarios[0].edad
);
console.log(
  "6.3: acceder a la propiedad TieneHijos del elemento en la posicion 0:",
   usuarios[0].tieneHijos
);
console.log(
  "6.4: acceder a la propiedad nombre del elemento en la posicion 2:",
   usuarios[2].nombre
);
console.log(
  "6.5: acceder a la propiedad nombre del elemento en la posicion 2:",
   usuarios[2].edad
);
var arregloDeArreglos = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(
  "9: arreglo de arreglos o arreglo bidimensional:",
  arregloDeArreglos
);
console.log(
  "10.0: acceder a un elemento en especifico:",
  arregloDeArreglos[0][0]
);
console.log(
  "10.1: acceder a un elemento en especifico:",
  arregloDeArreglos[1][1]
);
console.log(
  "10.2: acceder a un elemento en especifico:",
  arregloDeArreglos[2][2]
);
console.log(
  "10.3: acceder a un elemento en especifico:",
  arregloDeArreglos[2][1]
);
console.log(
  "10.4: acceder a un elemento en especifico:",
  arregloDeArreglos[0][2]
);
//Indicamos que tipo de arreglo es
console.log("11: tipo del arreglo", typeof arregloDeArreglos);