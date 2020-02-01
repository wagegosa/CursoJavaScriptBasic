//Se declara el objeto
var goku = {
    //priemro va el nombre de la propiedad : valor de la propiedad
    nombre: "Goku",
    edad: 40,
    tieneHijo : true
};
console.log("1:", "objeto", goku);
console.log("2: Tipo de variable: ", typeof goku);

// acceder a una propiedad especifico
console.log("3: La edad que tiene es de: ", goku.edad);

// actualizar un propiedad
goku.edad = 34;
console.log("4: La edad que tiene es de: ", goku.edad);

// Agregar un propiedad sin necesidad de ingresar
goku.esTerricola = false;
console.log("5: Objeto con una nueva propiedad. ", goku);

// Quitar una propiedad
delete goku.esTerricola;
console.log("6: Objeto sin la propiedad nueva. ", goku);

// Agregar objeto a otro objeto
// Creamos primero el objeto a agregar al objeto principal
var gohan = {
    //priemro va el nombre de la propiedad : valor de la propiedad
    nombre: "Gohan",
    edad: 18,
};

// Incluimos al objeto principal el objeto hijo 
var goku = {
    //priemro va el nombre de la propiedad : valor de la propiedad
    nombre: "Goku",
    edad: 40,
    tieneHijo : gohan
};
console.log("7: Objeto que contiene otro objeto ", goku);

// Objecto vacio
var objetoVacio = {};
console.log("8: Objeto vacio ", objetoVacio);

// Agregamos propiedad al objetoVacio
objetoVacio.propiedadUno = "Hola Cabezón";
console.log("9: Objeto ya no esta vacio ", objetoVacio);
