var a = 10;
console.log("1: el valor inicial de 'a' es: ", a);

a++;
a++;
console.log("2:le dijimmos 2 veces a++ eso nos da una suma total de: ", a);

++a;
console.log("3: Por ultimo lo sumamos uno mas de la forma '++a' eso nos da: ", a);

var x = 5;
// del lado der primero: asignacion, despues: incremento
var y = x++;
console.log("Immprimimos la siguiente forma 'x++'");
console.log("4:", "el valor de x:", x, "el valor de y:", y);

// // del lado izq primero: incremento, despues: asignacion
var y = ++x;
console.log("Immprimimos la siguiente forma '++x'");
console.log("4:", "el valor de x:", x, "el valor de y:", y);

var b = 5;
console.log("Valor inicial de 'b' es: ", b);
b--;
--b;
console.log("5: restamos 2 veces la forma 'b--' y '--b', dandonos el siguiente resultado: ", b);