var contador = 10;
// primero se ejecta el bloque del codigo y luego se ejecuta la evaluación
do {
  // codigo a repetir
  console.log("do-while:", contador);
  contador++;
} while (contador < 10);

// mientra que el while solo ejecuta la evaluación
var contador2 = 10;

while (contador2 < 10) {
  console.log("while:", contador2);
  contador2++;
}