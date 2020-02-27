// revertir un arreglo
var arreglo = [1, 2, 3, 4];
// [4, 3, 2, 1];
console.log("El arreglo inicial es: ", arreglo);

function revertirArreglo(arreglo) {
  var arregloInvertido = [];
  for (var i = arreglo.length - 1; i >= 0; i--) {
    arregloInvertido.push(arreglo[i]);//push->Agrega elemento nuevo 
    console.log(arregloInvertido);
  }
  return arregloInvertido;
}
console.log("revertirArreglo1", revertirArreglo(arreglo));
function revertirArreglo2(arreglo) {
  return arreglo.reverse();
}

console.log("revertirArreglo2", arreglo.reverse());

var arregloBidimensional = [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]];
console.log("El arreglo Bidimensiconal es:", arregloBidimensional);

function sumarArregloBidimensional(arreglo) {
  var sumaTotal = 0;
  for (var i = 0; i < arreglo.length; i++) {
    var arregloHijo = arreglo[i];
    for (var j = 0; j < arregloHijo.length; j++) {
      sumaTotal += arregloHijo[j];
      // console.log("El arreglo hijo es: ", arregloHijo);
    }
    console.log("Asi va la suma: ", sumaTotal);
  }
  return sumaTotal;
}

console.log("La suma total es de: ", sumarArregloBidimensional(arregloBidimensional));
