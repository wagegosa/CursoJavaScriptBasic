var cadenaNumero = "28";
console.log("1: es de tipo", typeof cadenaNumero);
console.log("2: valor", cadenaNumero);

// string a number
console.log("3: es de tipo", typeof Number(cadenaNumero));
console.log("4: valor", Number(cadenaNumero));

var cadenaRara = "28 r .";
//var cadenaRara = "28 3";

// string a number caso NaN
console.log("5: es de tipo", typeof Number(cadenaRara));
console.log("6: valor", Number(cadenaRara));

// number a string
var numero = 10;
console.log("7: es de tipo", typeof String(numero));
console.log("8: valor", String(numero));

// array a string
var numeros = [1, 2, 3, 4];
console.log("9: es de tipo", typeof String(numeros));
console.log("10: valor", String(numeros));

// objeto a string
var persona = {

    nombre: "John",
    apellido: "Wick"
};
console.log("11.0: es de tipo", typeof String(persona));
console.log("11.1: valor", String(persona));

var persona = {
    // nombre: "John",
    // apellido: "Wick"
};
  console.log("12.0: es de tipo", typeof String(persona));
  console.log("12.1: valor", String(persona));
  //No importa si los objetos esten llenos o vacios, este no va mostrar en la consola los datos