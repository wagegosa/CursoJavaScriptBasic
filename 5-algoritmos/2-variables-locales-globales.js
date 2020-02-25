//esta es euna variable global
var contador = 0;

function incrementarContador() {
  contador++;
  console.log(contador);
}

incrementarContador();
incrementarContador();

//en cambia aca la variable es local
function saludar() {
  var saludoLocal = "hola mundo!";
  console.log(saludoLocal);
}

// console.log(saludoLocal);
saludar(); 
