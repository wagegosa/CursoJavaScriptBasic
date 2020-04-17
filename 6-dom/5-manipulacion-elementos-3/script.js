//Mostrar el titulo en consola
var  lista1 = document.getElementById("lista1");
// previousElementSibling = Regresa un elemnto anterior del mismo nivel
var titulo1 = lista1.previousElementSibling;
console.log(titulo1);
// nextElementSiblin = Regresa un elemnto despues del mismo nivel
var titulo2 = lista1.nextElementSibling;
console.log(titulo2);

//Pintar el titulo de colores
//firstElementChild = obtenemos la referencia del primer elemento hijo
var primerHijo = lista1.firstElementChild;
//rojo
primerHijo.style.color = "red";
// lastElementChild = obetenomos el ultimo elemento hijo
var ultimoHijo = lista1.lastElementChild;
//Azul
ultimoHijo.style.color = "blue";

// children = nos muestra en un arreglo los hijos
var hijos = lista2.children;
console.log(hijos);
for (var i = 0; i < hijos.length; i++) {
  var hijo = hijos[i];
  console.log(hijo);
  hijo.style.color = "green";
}

var lista3 = document.getElementById("lista3");
// var lista4 = document.getElementById("lista4");

var hijos3 = lista3.children;
console.log("Va el arrgelo de la lista 3");
console.log(hijos3);

var hijo3;
for (var j = 0; j < hijos3.length; j++) {
  hijo3 = hijos3[j];
  console.log(hijo3);
  hijo3.style.color = "silver";
}

var titulo3 = lista3.previousElementSibling;
console.log("Va el titulo 3");
console.log(titulo3);

var titulo4 = lista3.nextElementSibling;
console.log("Va el titulo 4");
console.log(titulo4);

var ultimoHiloLista4 =  lista4.lastElementChild;
ultimoHiloLista4.style.color = "brown";

var primerHijoLista4 = lista4.firstElementChild;
primerHijoLista4.style.color = "Orange";