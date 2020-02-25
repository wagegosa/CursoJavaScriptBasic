//función para imprimir un Saludo
function saludar() {
  console.log("!Hola mundo!");
}
//invocamos la función
saludar();
//cuando esta en true ejecuta la función, cuando esta en false, no la ejecuta.
var saludarHumano = false;
//var saludarHumano = true;

if (saludarHumano) {
  saludar();
}

//función para sumar los dos parametros que se envien
function suma(a, b) {
  console.log("El resultado de la suma:", a + b);
}
  suma(3, 6);
  suma(6, 9);
// para este caso, tenemos una suma quemada, eso nos idica que solo podemos cambiar la suma solo si solo cambiamos los nuemro a sumar 
  function suma2() {
    console.log("El resultado de la suma: ", 10 + 10);
  }
//llmamos a la función suma2
  suma2();
  
  function sumaConResultado(numero1, numero2) {
     return numero1 + numero2;//retonamos para que se imprir por fuera de la función
  }
  //el resultado de la función la guardamos en la variable "reultado"
   var resultado = sumaConResultado(4, 4);
   console.log("resuldado: ", resultado);
  //creamos el arreglo
  var productos = [
  { nombre: "PS4", precio: 250 },
  { nombre: "iPhone X", precio: 800 },
  { nombre: "Laptop", precio: 300 },
  { nombre: "TV", precio: 200 },
  { nombre: "NetFlix", precio: 5 },
  { nombre: "Raton", precio:  10}
  ];
  //recorremos el objeto e imprimimos
  for (var i = 0; i < productos.length; i++) {
    var resuldado = revisarDescuento(productos[i]);
    console.log(resuldado);
  }
  //función para validar si hay descuento
  function revisarDescuento(producto) {
    if (producto.precio > 200) {
      return "tienes decuento con " + producto.nombre;
    } else {
      return "no tienes decuento con " + producto.nombre;
    }
  }
  