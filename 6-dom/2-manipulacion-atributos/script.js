var link = document.getElementById("link");

// verificar si existe el atributo
// el atributo "hasAttribute" sirve para verificar que contengan "href"  
if (link.hasAttribute("href")) {
  // obtener valor del atributo
  // con "getAttribute" obtenemos el atributo del elimento pasando el parametro "href"
  console.log("1: El valor del atributo es:", link.getAttribute("href"));
}

// agregar atributo con valor
// con este atributo le agregamos una classs con el valor verde
// link.setAttribute("class", "verde");
link.setAttribute("class", "azul")

console.log("2.1: enlace: ", link);
// mostramos los atributos que llamamos
console.log("3: atributos", link.attributes);

// eliminar atributo
// link.removeAttribute("class");
// console.log("4: atributos", link.attributes);

// control de clases
link.classList.add("rojo");
link.classList.add("verde");
link.classList.add("container");
console.log("5: clases", link.classList);

// link.classList.remove("rojo");
link.classList.remove("azul")
console.log("6: clases", link.classList);

if (link.classList.contains("rojo")) {
  console.log("7: contiene la clase rojo");
} else {
  console.log("7: no contiene la clase rojo");
}
var prueba = link.classList.contains("azul");
console.log(prueba);
if(prueba != false){
  console.log("8: Existe la en la clase el azul.");
}else{
  console.log("8: No existe en la clase el azul.");
}