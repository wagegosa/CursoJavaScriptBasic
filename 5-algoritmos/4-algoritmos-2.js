// sumar unicamente numeros positivos
var numeros = [1, -2, 3, 10, -5, 6, -5];

function sumaPositivos(numeros) {
  var sumaTotal = 0;
  for (var index = 0; index < numeros.length; index++) {
    if (numeros[index] > 0) {
      sumaTotal += numeros[index];
    }
  }
  return sumaTotal;
}
console.log("La suma total es de: ", sumaPositivos(numeros));
function sumaNegativos(numeros) {
    sumaTotalNega = 0;
    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] < 0) {
            sumaTotalNega =  sumaTotalNega - numeros[i];
        }
    }
    return sumaTotalNega;
}
console.log("La suma de los negativos es de: ", sumaNegativos(numeros));

// buscar la cantidad de palabras
var palabras = [
  "perro",
  "gato",
  "leon",
  "dragon",
  "perro",
  "dragon",
  "perro",
  "gato"
];

function obtenerRepeticiones(palabras, palabra) {
  var contadorPalabra = 0;
  for (var i = 0; i < palabras.length; i++) {
    if (palabras[i] === palabra) {
      contadorPalabra++;
    }
    console.log(contadorPalabra);
  }
  return contadorPalabra;
}

console.log("repeticiones:", obtenerRepeticiones(palabras, "gato"));

// remover espacios de la cadena de texto
var holaMundo = "h o l a m u n d o!";

function removerEspacios(cadena) {
  var resultado = "";
  for (var i = 0; i < cadena.length; i++) {
    if (cadena[i] !== " ") {
      resultado += cadena[i];
    }
  }
  return resultado;
}
console.log(removerEspacios(holaMundo));

function removerEspacios2(cadena) {
  var resultado = cadena.split(" ");
  resultado = resultado.join("");
  return resultado;
  // return cadena.split(" ").join("");
}

console.log("removerEspacios2 con return resultado: ", removerEspacios2(holaMundo));

function removerEspacios2(cadena) {
  // var resultado = cadena.split(" ");
  // resultado = resultado.join("");
  // return resultado;
  return cadena.split(" ").join("");
}
console.log("removerEspacios2 con return cadena.split: ", removerEspacios2(holaMundo));
