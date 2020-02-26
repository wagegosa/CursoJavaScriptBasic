//funcion que regresa un numero al cuadrado

function cuadrado(numero) {
    return numero * numero;
}
  
  console.log(cuadrado(9));

  //función para sumar todos los numero de un arreglo
  var numeros = [1, 10, 22, 18, 25];
  
  function sumarArreglo(arreglo) {
    var sumaTotal = 0;
    for (var i = 0; i < arreglo.length; i++) {
      //sumaTotal = sumaTotal + arreglo[i];
      sumaTotal += arreglo[i];
    }
    return sumaTotal;
  }
  
  console.log(sumarArreglo(numeros));
//suma de arreglo misto
  var arregloMixto = ["4", 6, 5, "6", 7];
  
  function sumarArregloMixto(arregloMixto) {
    var sumaTotal = 0;
    for (var i = 0; i < arregloMixto.length; i++) {
      sumaTotal += Number(arregloMixto[i]);//convertimos las cadenas a numeros con Number().
    }
    return sumaTotal;
  }
  
  console.log("resultado de sumarArregloMixto", sumarArregloMixto(arregloMixto));
